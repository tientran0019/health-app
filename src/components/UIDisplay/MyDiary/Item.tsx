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
		<div className=" gap-2 border border-black p-4">
			<div className="text-lg">2021.05.21 <br />23:25</div>
			<span className="text-xs font-noto">私の日記の記録が一部表示されます</span>
			<p className="text-xs font-noto">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

		</div>
	);
};

export default Item;
