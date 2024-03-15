/** --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 14:57:25

* Last updated on: 2024-03-15 14:57:25
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

import React from 'react';

import { Loader } from 'lucide-react';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Loading = () => {
	// const { } = props;

	return (
		<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
			<div className="max-w-lg mx-auto space-y-3 text-center">
				<Loader size={40} color="#FF963C" />
			</div>
		</div>
	);
};

Loading.propTypes = propTypes;

export default Loading;
