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
import { useAsync } from 'react-use';

import { getMeals } from 'src/services/meals.service';

import { Skeleton } from 'antd';
import MealFilter from './Filter';
import MealItem from './Item';

interface PropsType {
	// [prop: string]: any;
}

interface ItemData {
	id: string | number;
	image: string;
	title: string;
	type: 'morning' | 'lunch' | 'snack' | 'dinner';
}

const MealHistory = (props: PropsType) => {
	const [limit, setLimit] = React.useState(8);
	const [type, setType] = React.useState('all');

	const { loading, value: data = {} } = useAsync(async () => {
		const response = await getMeals({
			limit,
			type,
		});

		return response;
	}, [limit, type]);

	const handleFilter = React.useCallback((val: string) => {
		setType(val);
	}, []);

	return (
		<div>
			<MealFilter
				onChange={handleFilter}
				value={type as 'all'}
			/>

			<div className="grid grid-cols-4 gap-2 my-14">
				{
					data?.items?.map((el: ItemData) => {
						return (
							<MealItem
								key={el.id}
								id={el.id}
								image={el.image}
								title={el.title}
							/>
						);
					})
				}
				{
					!loading &&
					Array.from({
						length: 8, // Create 8 indexes with undefined values
					},
					(v, k) => { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
						return k; // Return k(ey) as value for this index
					},
					).map((el) => {
						return <Skeleton.Image active key={el} className="w-full h-[250px]" style={{ height: '250px', width: 'auto' }} />;
					})
				}
			</div>

			{
				data.total > limit &&
				<div className="text-center mb-14">
					<button className="rounded-md bg-gradient px-10 py-4 text-sm font-semibold text-white shadow-sm " onClick={() => setLimit(limit + 8)}>
						記録をもっと見る
					</button>
				</div>
			}
		</div>
	);
};

export default MealHistory;
