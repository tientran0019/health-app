/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 15:23:31

* Last updated on: 2024-03-15 15:23:31
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';

import Link from 'next/link';

const NotFoundPage = () => {
	return (
		<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
			<div className="max-w-lg mx-auto space-y-5 text-center">
				<h3 className="text-primary-400 font-semibold">
					404 Error
				</h3>
				<p className="text-4xl font-semibold sm:text-5xl">
					Page not found
				</p>
				<p className="">
					Sorry, the page you are looking for could not be found or has been removed.
				</p>
				<div className="flex flex-wrap flex-col items-center justify-center gap-3 pt-10">
					<Link href="/" className="rounded-md bg-gradient px-10 py-4 text-sm font-semibold text-white shadow-sm">
						Go to home
					</Link>
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Contact support
					</a>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
