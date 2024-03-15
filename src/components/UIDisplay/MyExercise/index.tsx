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

const MyExercise = (props: PropsType) => {
	return (
		<div className="mb-14 bg-dark-500 w-full h-full p-5 flex flex-col items-center justify-center">
			<div className="text-left text-light justify-start flex items-center gap-10 w-full">
				<span className="text-light">MY<br />EXERCISE</span>
				<h3 className="text-light text-2xl">
					2021.05.21
				</h3>
			</div>

			<div className="overflow-y-scroll h-[200px] w-full mt-5">
				<div className="grid grid-cols-2 w-full gap-x-10 gap-y-2">
					{
						Array.from({
							length: 16, // Create 16 indexes with undefined values
						},
						(v, k) => { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
							return k; // Return k(ey) as value for this index
						},
						).map((el) => {
							return <Item key={el} />;
						})
					}
				</div>
			</div>
		</div>
	);
};

export default MyExercise;
