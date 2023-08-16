import React from 'react'

import './index.scss';

import logo from '../../img/logo.svg';

const Preloader = () => {
	return (
		<div className='preloader'>
			<div className="preloader__img">
				<img src={logo} alt="logo" />
			</div>
			<div className="preloader__loading">
				Loading <div className="custom-loader"></div>
			</div>
		</div>
	)
}

export default Preloader