/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 20:23:48

* Last updated on: 2023-07-17 20:23:48
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';

const Footer = () => {
	// const { } = props;

	return (
		<footer className="py-16 bg-dark">
			<div className="container flex items-center">
				<nav className=" text-light gap-20 flex">
					<a href="#" className="text-xs text-light">会員登録</a>
					<a href="#" className="text-xs text-light">運営会社</a>
					<a href="#" className="text-xs text-light">利用規約</a>
					<a href="#" className="text-xs text-light">個人情報の取扱について</a>
					<a href="#" className="text-xs text-light">特定商取引法に基づく表記</a>
					<a href="#" className="text-xs text-light">お問い合わせ</a>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
