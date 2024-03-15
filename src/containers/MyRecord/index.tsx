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

import MyExercise from 'src/components/UIDisplay/MyExercise';
import MyDiary from 'src/components/UIDisplay/MyDiary';
import BodyRecordChart from 'src/components/UIDisplay/BodyRecordChart';

interface PropsType {
	[prop: string]: any;
}

const MyRecord = (props: PropsType) => {
	return (
		<div className="container py-14">
			<div className="flex gap-20 mb-14 items-center justify-around">
				<div className="bg-primary-300 p-6 w-1/3">
					<div className="relative  w-full h-full bg-[url('/images/MyRecommend-1.jpg')] bg-no-repeat bg-cover flex items-center justify-center bg-center py-20">
						<div className="text-center relative z-10">
							<h3 className="text-primary-300 text-3xl">BODY RECORD</h3>
							<div className="bg-primary-400 px-5 py-1 text-light text-sm font-noto mt-2">自分のカラダの記録</div>
						</div>
						<div className=" absolute inset-0 bg-dark-500/80" />
					</div>
				</div>
				<div className="bg-primary-300 p-6 w-1/3">
					<div className="relative  w-full h-full bg-[url('/images/MyRecommend-2.jpg')] bg-no-repeat bg-cover flex items-center justify-center bg-center py-20">
						<div className="text-center relative z-10">
							<h3 className="text-primary-300 text-3xl">BODY RECORD</h3>
							<div className="bg-primary-400 px-5 py-1 text-light text-sm font-noto mt-2">自分のカラダの記録</div>
						</div>
						<div className=" absolute inset-0 bg-dark-500/80" />
					</div>
				</div>
				<div className="bg-primary-300 p-6 w-1/3">
					<div className="relative  w-full h-full bg-[url('/images/MyRecommend-3.jpg')] bg-no-repeat bg-cover flex items-center justify-center bg-center py-20">
						<div className="text-center relative z-10">
							<h3 className="text-primary-300 text-3xl">BODY RECORD</h3>
							<div className="bg-primary-400 px-5 py-1 text-light text-sm font-noto mt-2">自分のカラダの記録</div>
						</div>
						<div className=" absolute inset-0 bg-dark-500/80" />
					</div>
				</div>
			</div>
			<BodyRecordChart />
			<MyExercise />
			<MyDiary />
		</div>
	);
};

export default MyRecord;
