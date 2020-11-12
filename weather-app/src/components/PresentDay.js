import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
require('dotenv').config();

const PresentDay = ({ query }) => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const [initialTemp, latestTemp] = useState({ loading: true, data: null });

	useEffect(() => {
		fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`)
			.then((response) => response.json())
			.then((data) => {
				latestTemp({ loading: false, data: data });
				console.log(latestTemp);
			});
	}, [latestTemp, query]);

	console.log(initialTemp);
	return (
		<div>
			{initialTemp.loading ? (
				''
			) : (
				<p>Current Temperature: {initialTemp.data.current.temp_f}</p>
			)}
		</div>
	);
};

PresentDay.propTypes = {
	query: PropTypes.string.isRequired,
};

export default PresentDay;
