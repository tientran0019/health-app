/* eslint-disable react/button-has-type */
/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 16:48:41

* Last updated on: 2024-03-15 16:48:41
* Last updated by: Tien Tran
*------------------------------------------------------- */

import React from 'react';

import mockDataColumns from 'src/mock-data/columns.json';

import Item from './Item';

interface PropsType {
	// [prop: string]: any;
}

const ColumnList = (props: PropsType) => {
	return (
		<div>
			<div className="grid grid-cols-4 gap-3 my-10">
				{
					mockDataColumns.map((el) => {
						return (
							<Item
								key={el.id}
								data={el}
							/>
						);
					})
				}
			</div>

			<div className="text-center mb-10">
				<button className="rounded-md bg-gradient px-10 py-4 text-sm font-semibold text-white shadow-sm ">
					コラムをもっと見る
				</button>
			</div>
		</div>
	);
};

export default ColumnList;
