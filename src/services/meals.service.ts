/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 23:36:10

* Last updated on: 2024-03-15 23:36:10
* Last updated by: Tien Tran
*------------------------------------------------------- */

import fetchApi from 'src/utils/fetch-api';

export const getMeals = async (params?: any) => {
	const res = await fetchApi({
		url: '/meals',
		payload: params,
	});

	return res;
};
