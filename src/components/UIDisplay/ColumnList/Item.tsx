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

interface ItemData {
	id: string | number;
	image: string;
	date: string;
	description: string;
	hashtags: string[];
}

interface PropsType {
	data: ItemData;
}

const Item = (props: PropsType) => {
	const { data } = props;

	return (
		<div className="w-full  mb-3">
			<div className="relative w-full cursor-pointer overflow-hidden mb-3">
				<div
					className=" h-[150px] bg-no-repeat bg-cover bg-center  hover:scale-125 hover:rotate-12 transition-all duration-300"
					style={{
						backgroundImage: `url('${data.image}')`,
					}}
				/>
				<div className="bg-primary-300 p-2 pr-4 absolute z-10 bottom-0">
					<h5 className="text-light">{data.date}</h5>
				</div>
			</div>
			<p className="text-ellipsis overflow-hidden font-noto">{data.description}</p>
			<div className="text-sm text-primary-400 gap-3 flex mt-1">
				{
					data.hashtags?.map((el) => {
						return <a href="#" className="text-primary-400 font-noto" key={el}>#{el}</a>;
					})
				}
			</div>
		</div>
	);
};

export default Item;
