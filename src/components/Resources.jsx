// React
import React from 'react';

// App
import Header from './Header';
import {ListResources} from '../helpers/constants';
import {openInNewTab} from '../helpers/lib';

const Resources = () => {
	return (
		<>
			<Header />
			<div className='resources'>
				{ListResources.map((resource, index) => (
					<button key={index} className='resources__item' onClick={() => openInNewTab(resource.link)}>
						<img className='icon' src={resource.icon} alt='pdf file' />
						<span className='resources__item__name'>{resource.name}</span>
					</button>
				))}
			</div>
		</>
	);
};

export default Resources;
