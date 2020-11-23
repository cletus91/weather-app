import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();
const WeeklyForecast = ({ forecast }) => {
	// const apiKey = process.env.REACT_APP_API_KEY;

	// const [forecast, setForecast] = useState({ loading: true, data: null });
	// console.log('query: ' + query);
	// useEffect(() => {
	// 	const getCurrentForecast = () => {
	// 		if (query === '') {
	// 			return;
	// 		} else {
	// 			axios
	// 				.get(
	// 					`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}`
	// 				)
	// 				.then((res) => {
	// 					setForecast({ loading: false, data: res.data });
	// 				})
	// 				.catch((error) => console.log(error.message));
	// 		}
	// 	};
	// 	getCurrentForecast();
	// }, [apiKey, query]);

	console.log(forecast);
	return (
		<div>
			{/* <p>{forecast ? (forecast.map((i, day) => (day.map((_i, hour) => (
				<li>{hour.hour.temp_c}</li>
			)))) : ''}</p> */}
		</div>
	);
};

export default WeeklyForecast;
