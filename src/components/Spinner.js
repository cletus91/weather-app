import React from 'react';
import spinner from '.././spinner.gif';

export const Spinner = () => {
	return (
		<div className='spinner'>
			<img src={spinner} alt='spinner' />
		</div>
	);
};
