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

import MealHistory from 'src/components/UIDisplay/MealHistory';
import FatPercentageGraph from 'src/components/UIDisplay/FatPercentageGraph';
import AchievementRate from 'src/components/UIDisplay/AchievementRate';

interface PropsType {
	[prop: string]: any;
}

const TopPage = (props: PropsType) => {
	return (
		<div className="class">
			<div className="flex items-stretch">
				<div className="flex-1">
					<AchievementRate />
				</div>
				<div className="w-3/5">
					<FatPercentageGraph />
				</div>
			</div>
			<div className="container mt-14">
				<MealHistory />
			</div>
		</div>
	);
};

export default TopPage;
