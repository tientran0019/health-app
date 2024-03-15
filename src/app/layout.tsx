/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 15:23:31

* Last updated on: 2024-03-15 15:23:31
* Last updated by: Tien Tran
*------------------------------------------------------- */

import React from 'react';
import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Statics from 'src/components/UIControl/Statics';

import 'src/theme/globals.css';
import { App } from 'antd';

export const metadata: Metadata = {
	title: {
		default: 'Health App',
		template: '%s | Health App',
	},
	description: 'Health App description',
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AntdRegistry>
					<App>
						{children}
						<Statics />
					</App>
				</AntdRegistry>
			</body>
		</html>
	);
}
