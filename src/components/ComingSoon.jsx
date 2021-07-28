/** React */
import React from 'react';
import {Link} from 'react-router-dom';

/** App */
import * as Images from '../assets/images/index';
import Header from './Header';

const ComingSoon = () => {
	return (
		<>
			<Header />
			<div className='coming-soon'>
				<div className='coming-soon__content'>
					<p className='coming-soon__content__title'>Coming soon</p>
					<Link to='/' className="coming-soon__content__btn">
						Back to home
					</Link>
				</div>
				<img src={Images.ComingSoonImg} className='coming-soon__img' alt='Coming soon' />
			</div>
		</>
	);
};

export default ComingSoon;
