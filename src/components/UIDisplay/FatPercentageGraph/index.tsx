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
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

interface PropsType {
	[prop: string]: any;
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Legend,
	Tooltip,
);

export const options = {
	responsive: true,
	layout: {
		padding: 20,
	},
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	stacked: false,
	plugins: {
		title: {
			display: false,
			text: 'Body weight - Body fat percentage graph',
		},
		legend: {
			position: 'top',
			display: false,
		},
	},
	scales: {
		x: {
			// display: true,
			grid: {
				color: '#777777',
				tickColor: '#777777',
			},
		},
		y: {
			type: 'linear' as const,
			display: false,
			position: 'left' as const,
		},
		y1: {
			type: 'linear' as const,
			display: false,
			position: 'right' as const,
			grid: {
				drawOnChartArea: false,
			},
		},
	},
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Body weight',
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
			borderColor: '#FFCC21',
			backgroundColor: '#FFCC21',
			yAxisID: 'y',
		},
		{
			label: 'Body fat',
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
			borderColor: '#8FE9D0',
			backgroundColor: '#8FE9D0',
			yAxisID: 'y1',
		},
	],
};

const FatPercentageGraph = (props: PropsType) => {
	return (
		<div className="bg-dark-600 w-full h-full px-4 flex items-center justify-center">
			<Line options={options as any} data={data} />
		</div>
	);
};

export default FatPercentageGraph;
