/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 16:48:41

* Last updated on: 2024-03-15 16:48:41
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';

import ColumnList from 'src/components/UIDisplay/ColumnList';

interface PropsType {
	[prop: string]: any;
}

const Column = (props: PropsType) => {
	return (
		<div className="container py-14">
			<div className="flex gap-20 mb-14 items-center justify-around">
				<div className="relative  w-full h-full bg-dark-600 flex items-center justify-center bg-center py-10">
					<div className="text-center relative z-10">
						<h3 className="text-primary-300 text-3xl">RECOMMENDED <br /> COLUMN</h3>
						<div className="text-light text-lg border-t pt-3 mt-3 inline-block">オススメ</div>
					</div>
				</div>
				<div className="relative  w-full h-full bg-dark-600 flex items-center justify-center bg-center py-10">
					<div className="text-center relative z-10">
						<h3 className="text-primary-300 text-3xl">RECOMMENDED<br /> DIET</h3>
						<div className="text-light text-lg border-t pt-3 mt-3 inline-block">ダイエット</div>
					</div>
				</div>
				<div className="relative  w-full h-full bg-dark-600 flex items-center justify-center bg-center py-10">
					<div className="text-center relative z-10">
						<h3 className="text-primary-300 text-3xl">RECOMMENDED<br /> BEAUTY</h3>
						<div className="text-light text-lg border-t pt-3 mt-3 inline-block">美容</div>
					</div>
				</div>
			</div>
			<ColumnList />
		</div>
	);
};

export default Column;
