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
import { Button } from 'antd';

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
			text: 'BODY RECORD 2021.05.21',
			color: '#fff',
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

const BodyRecordChart = (props: PropsType) => {
	return (
		<div className="bg-dark-500 w-full h-full px-5 flex flex-col items-center justify-center mb-14">
			<div className="text-left text-light justify-start flex items-center gap-10 w-full pt-5">
				<span className="text-light">BODY<br />RECORD</span>
				<h3 className="text-light text-2xl">
					2021.05.21
				</h3>
			</div>
			<Line options={options as any} data={data} />
			<div className="flex gap-2 justify-start pb-5 w-full">
				<Button>日</Button>
				<Button>週</Button>
				<Button>月</Button>
				<Button className="bg-primary-300">年</Button>
			</div>
		</div>
	);
};

export default BodyRecordChart;
