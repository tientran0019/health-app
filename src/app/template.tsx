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
import RootLayout from 'src/components/Layout/MainLayout';

export default async function LocaleLayout({ children }: React.PropsWithChildren) {
	return (
		<RootLayout>
			{children}
		</RootLayout>
	);
}
