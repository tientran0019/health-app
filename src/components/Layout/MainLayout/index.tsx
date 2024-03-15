/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 19:45:32

* Last updated on: 2023-07-17 19:45:32
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';

import { FloatButton } from 'antd';

import Footer from 'src/components/Layout/Footer';
import Header from 'src/components/Layout/Header';

const RootLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
			<FloatButton.BackTop />
		</div>
	);
};

export default RootLayout;
