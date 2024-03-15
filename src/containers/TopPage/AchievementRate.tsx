/* eslint-disable react/no-unstable-nested-components */
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

import { Progress } from 'antd';

interface PropsType {
	[prop: string]: any;
}

const AchievementRate = (props: PropsType) => {
	return (
		<div className="relative  w-full h-full bg-[url('/images/d01.jpg')] bg-no-repeat bg-cover flex items-center justify-center bg-center p-16">
			<Progress
				size={200}
				strokeColor="#ffff"
				strokeWidth={2}
				type="circle"
				percent={75}
				format={(percent) => {
					return (
						<div>
							<span className="text-light text-xl">05/21</span>
							<span className="text-light"> {percent}%</span>
						</div>
					);
				}}
				className="z-10"
			/>
			<div className="bg-gradient-to-tr from-[#FF963C] to-primary-[#FFCC21] absolute inset-0  opacity-65" />
		</div>
	);
};

export default AchievementRate;
