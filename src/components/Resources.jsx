import React from 'react';
import Header from './Header';
import {ListResources} from '../helpers/constants';

const Whitepaper = () => {
	return (
		<>
			<Header />
			<div className='resources'>
				{ListResources.map((resource, index) => (
					<a key={index} className='resources__item' href={resource.link} rel='noreferrer' target='_blank'>
						<img className='icon' src={resource.icon} alt='pdf file' />
						<span className='resources__item__name'>{resource.name}</span>
					</a>
				))}
			</div>
		</>
	);
};

export default Whitepaper;
