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

'use client';

import React from 'react';

import Item from './Item';

interface PropsType {
	[prop: string]: any;
}

const MyDiary = (props: PropsType) => {
	return (
		<div className="">
			<h3 className=" text-2xl">
				MY DIARY
			</h3>

			<div className="grid grid-cols-4 w-full gap-4 mt-5">
				{
					Array.from({
						length: 8, // Create 8 indexes with undefined values
					},
					(v, k) => { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
						return k; // Return k(ey) as value for this index
					},
					).map((el) => {
						return <Item key={el} />;
					})
				}
			</div>
			<div className="text-center mt-10">
				<button className="font-noto rounded-md bg-gradient px-10 py-4 text-sm font-semibold text-white shadow-sm ">
					自分の日記をもっと見る
				</button>
			</div>
		</div>
	);
};

export default MyDiary;
