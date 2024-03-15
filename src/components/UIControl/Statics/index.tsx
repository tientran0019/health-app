/* eslint-disable import/no-mutable-exports */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2024-03-15 23:45:49

* Last updated on: 2024-03-15 23:45:49
* Last updated by: Tien Tran
*------------------------------------------------------- */

'use client';

// import React from 'react';
// import PropTypes from 'prop-types';

import { App } from 'antd';

// import classes from './style.module.scss

let message: any;
let notification: any;
let modal: any;

const Statics = () => {
	const staticFunction = App.useApp();

	message = staticFunction.message;
	modal = staticFunction.modal;
	notification = staticFunction.notification;

	return null;
};

export { notification, message, modal };

export default Statics;
