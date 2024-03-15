/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:51:21
*------------------------------------------------------- */

import merge from 'lodash/merge';
import queryString, { StringifiableRecord } from 'query-string';
import { notification } from 'src/components/UIControl/Statics';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface FetchOptions {
	url: string,
	options?: any,
	payload?: any,
}

const fetchApi = async ({ url, options, payload = {} }: FetchOptions, cb?: (e: any | null, d?: any) => void): Promise<any> => {
	try {
		const defaultOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		};

		const opts = merge(defaultOptions, options);

		let uri = API_URL + url;

		if (payload && Object.keys(payload).length > 0) {
			if (opts && opts.method === 'GET') {
				uri = queryString.stringifyUrl({ url: uri, query: payload as StringifiableRecord });
			} else {
				if (opts.headers['Content-Type'] === 'multipart/form-data') {
					// @ts-ignore
					delete opts.headers['Content-Type'];

					const formData = new FormData();
					Object.entries(payload).forEach(([key, val]: [string, any]) => {
						if (val) {
							if (key === 'files') {
								// @ts-ignore
								val.forEach((file) => {
									formData.append(key, file);
								});
							} else {
								formData.append(key, val);
							}
						}
					});

					opts.body = formData;
				} else {
					opts.body = JSON.stringify(payload);
				}
			}
		}

		if (process.env.APP_ENV === 'development') {
			console.log('------');
			console.log('Call API: url, options, payload', uri, opts, payload);
		}

		const response = await fetch(uri, opts);

		if (process.env.APP_ENV === 'development') {
			console.log('------');
		}

		if (response.ok && (response.status === 204 || response.statusText === 'No Content')) {
			cb?.(null, {});
			return {};
		}

		const data = await response.json();

		if (response.status !== 200 || data.statusCode !== 200) {
			throw data;
		}

		cb?.(null, data.result || {});
		return data.result || {};
	} catch (err: any) {
		if (process.env.APP_ENV === 'development') {
			console.log('Call API Error: ', err);
		}

		if (typeof window !== 'undefined') {
			notification.error({
				message: 'Oops!',
				description: err.error?.message || err.message || err.toString(),
			});
		}

		if (err.statusCode === 403 || err.statusCode === 401) {
			// AuthStorage.destroy();
			// dispatch({ type: 'LOGOUT_SUCCESS' });
			if (typeof window !== 'undefined') {
				// Router.replace('/forbidden');
			}
		}

		cb?.(err);
		throw err;
	}
};

export default fetchApi;
