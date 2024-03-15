/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 16:48:41

* Last updated on: 2024-03-15 16:48:41
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';

interface PropsType {
	[prop: string]: any;
}

const Item = (props: PropsType) => {
	return (
		<div className="flex text-light gap-2 border-b p-2 pl-0">
			<div className="text-light">●</div>
			<div className="flex-1">
				<p className="text-light font-noto">家事全般（立位・軽い）</p>
				<span className="text-primary-300">26kcal</span>
			</div>
			<div className="text-lg text-primary-300 place-items-center">
				10 min
			</div>
		</div>
	);
};

export default Item;
