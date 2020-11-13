import React, { useEffect, useState } from 'react';
import axios from 'axios';

require('dotenv').config();

const PresentDay = () => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const [query, setQuery] = useState('');
	const [initialTemp, latestTemp] = useState({ loading: true, data: null });

	useEffect(() => {
		axios
			.get(
				`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`
			)
			.then((res) => {
				latestTemp({ loading: false, data: res.data });
			});
	}, [latestTemp, query]);

	console.log(initialTemp);

	return (
		<div>
			<div>
				<input
					type='text'
					value={query}
					placeholder='Enter City'
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>

			{initialTemp.loading ? (
				<h3>Loading...</h3>
			) : (
				<div>
					<h1>
						{initialTemp.data.current.temp_c}°C/
						{initialTemp.data.current.temp_f}
						°F
					</h1>
					<h3>
						{initialTemp.data.location.name},{initialTemp.data.location.region},
						{initialTemp.data.location.country}
					</h3>
				</div>
			)}
		</div>
	);
};

export default PresentDay;
