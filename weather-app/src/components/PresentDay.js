import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeeklyForecast from './WeeklyForecast';
import { Spinner } from './Spinner';
require('dotenv').config();

const PresentDay = () => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const [query, setQuery] = useState('');
	const [initialTemp, latestTemp] = useState({
		loading: false,
		data: null,
		localTime: null,
	});

	const days = 7;

	useEffect(() => {
		const getCurrentWeather = () => {
			if (query === '') {
				return;
			} else {
				latestTemp({ loading: true });
				axios
					.get(
						`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}`
					)
					.then((res) => {
						latestTemp({
							loading: false,
							data: res.data,
							localTime: res.data.location.localtime,
						});
					})
					.catch((error) => console.log(error.message));
			}
		};

		getCurrentWeather();
	}, [apiKey, query]);

	console.log(initialTemp);

	return (
		<>
			<div>
				<label name='Enter City' htmlFor='city name'>
					Enter City
				</label>
				<p>
					<input
						type='text'
						id='city name'
						value={query}
						placeholder='Eg: London, UK'
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</p>
			</div>

			{initialTemp.loading ? (
				<Spinner />
			) : (
				initialTemp.data && (
					<div>
						<div className='weather-card'>
							<div className='weather-card-left'>
								<h4>
									<i className='fas fa-map-marker-alt'></i>{' '}
									{initialTemp.data.location.name ?? 'N/A'}
								</h4>

								<p>{initialTemp.data.location.localtime ?? 'N/A'}</p>

								<img
									src={initialTemp.data.current.condition.icon ?? 'N/A'}
									alt={initialTemp.data.current.condition.text ?? 'N/A'}
									width='100px'
									height='100px'
								/>
								<h1>
									{initialTemp.data.current.temp_c}
									<span>°C</span>
								</h1>

								<h4>{initialTemp.data.current.condition.text ?? 'N/A'}</h4>
							</div>

							<div className='weather-card-right'>
								<p>
									feels like
									<span>
										{Math.floor(initialTemp.data.current.feelslike_c) ?? 'N/A'}
										°C
									</span>
								</p>
								<p>
									wind
									<span> {initialTemp.data.current.wind_mph ?? 'N/A'} mph</span>
								</p>
								<p>
									uv<span> {initialTemp.data.current.uv ?? 'N/A'}</span>
								</p>
								<p>
									humidity
									<span> {initialTemp.data.current.humidity ?? 'N/A'}</span>
								</p>
								<p>
									precipitation
									<span> {initialTemp.data.current.precip_in ?? 'N/A'} in</span>
								</p>
								<p>
									pressure
									<span>
										{' '}
										{initialTemp.data.current.pressure_in ?? 'N/A'} in
									</span>
								</p>
								<p>
									visibility
									<span>
										{' '}
										{initialTemp.data.current.vis_miles ?? 'N/A'} miles
									</span>
								</p>
							</div>
						</div>
						<div>
							<WeeklyForecast
								forecast={initialTemp.data.forecast.forecastday}
							/>
						</div>
					</div>
				)
			)}
		</>
	);
};

export default PresentDay;
