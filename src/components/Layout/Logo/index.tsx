/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 15:23:31

* Last updated on: 2024-03-15 15:23:31
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import Image from 'next/image';
import React from 'react';

interface PropsType {
	size?: number;
	inline?: boolean;
	[prop: string]: any;
}

const Logo = (props: PropsType) => {
	const { size = 40, inline, ...rest } = props;

	return (
		<div className={'inline text-center ' + (inline ? 'flex items-center gap-2' : '')}>
			<Image
				alt="logo"
				{...rest}
				src={require('/public/logo.png')}
				width={(size / 253) * 669}
				height={size}
				className="m-auto -mb-1"
			/>
		</div>
	);
};

export default Logo;
