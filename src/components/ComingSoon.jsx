/** React */
import React from 'react';
import {Link} from 'react-router-dom';

/** App */
import Header from './Header';

export default function ComingSoon() {
	return (
		<div className='comingSoon header'>
			<Header />
			<div className='comingSoon-content'>
				<p>Coming soon</p>
				<Link to='/'>
					<button>Back to Home</button>
				</Link>
			</div>
		</div>
	);
}
