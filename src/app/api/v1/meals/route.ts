/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-12-11 12:48:14

* Last updated on: 2023-12-11 12:48:14
* Last updated by: Tien Tran
*------------------------------------------------------- */

import { NextResponse, type NextRequest } from 'next/server';

import mealsMock from 'src/mock-data/meals.json';

const posts = [...mealsMock];

export async function GET(request: NextRequest) {
	const type = (request.nextUrl.searchParams.get('type') || 0) as string;
	const skip = (request.nextUrl.searchParams.get('skip') || 0) as number * 1;
	const limit = (request.nextUrl.searchParams.get('limit') || 8) as number * 1;

	const list = (posts.filter((el, i) => {
		// return i >= skip;
		return i < skip + limit && (type === 'all' || el.type === type);
	}) || []);

	return NextResponse.json({
		statusCode: 200,
		result: {
			items: list,
			// items: list.slice(0, limit),
			limit,
			skip,
			total: posts.filter(el => {
				return type === 'all' || el.type === type;
			}).length,
		},
	});
}
