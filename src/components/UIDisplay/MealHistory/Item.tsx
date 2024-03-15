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

interface PropsType {
	image: string;
	title: string;
	[prop: string]: any;
}

const MealItem = (props: PropsType) => {
	const { image, title } = props;

	return (
		<div className="relative w-full cursor-pointer overflow-hidden">
			<div
				className=" h-[250px] bg-no-repeat bg-cover bg-center  hover:scale-125 hover:rotate-12 transition-all duration-300"
				style={{
					backgroundImage: `url('${image}')`,
				}}
			/>
			<div className="bg-primary-300 p-2 pr-4 absolute z-10 bottom-0">
				<h5 className="text-light">{title}</h5>
			</div>
		</div>
	);
};

export default MealItem;
