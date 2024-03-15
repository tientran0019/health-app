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
	icon: React.ReactNode;
	label: string;
	active?: boolean;
	value: string;
	onClick: (value: string) => void;
	[prop: string]: any;
}

const HexagonalMenu = (props: PropsType) => {
	const { icon, label, onClick, value, active } = props;

	return (
		<div className={(active ? 'scale-125 ' : '') + 'relative transition-all duration-300 cursor-pointer hover:scale-125'} onClick={() => onClick(value)}>
			<div className="absolute flex flex-col items-center justify-center inset-0 gap-2">
				{icon}
				<span className="text-light text-lg font-noto">{label}</span>
			</div>
			<svg width="116" height="134" viewBox="0 0 116 134" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z" fill="url(#paint0_linear_51101_645)" />
				<defs>
					<linearGradient id="paint0_linear_51101_645" x1="25.9565" y1="165.202" x2="147.019" y2="118.302" gradientUnits="userSpaceOnUse">
						<stop stopColor="#FFCC21" />
						<stop offset="1" stopColor="#FF963C" />
					</linearGradient>
				</defs>
			</svg>

		</div>
	);
};

export default HexagonalMenu;
