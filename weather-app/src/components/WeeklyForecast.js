import React from 'react';

require('dotenv').config();
const WeeklyForecast = ({ forecast, day }) => {
	console.log(forecast);
	return (
		<div className='hourly-forecast'>
			{forecast
				? forecast.map((currentDay) =>
						currentDay.hour.map((allHours) => {
							let tempC = Math.floor(allHours.temp_c);
							let time = allHours.time;
							time = new Date(time)
								.toLocaleTimeString()
								.replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

							return (
								<div
									key={allHours.time}
									className={`item ${day ? 'day' : 'night'}`}>
									<div className='item-time'>{time}</div>
									<div className='item-img'>
										<img
											className='item-img'
											src={allHours.condition.icon}
											alt={allHours.condition.icon}
										/>{' '}
										<span>
											{allHours.chance_of_rain && allHours.chance_of_rain > 0
												? allHours.chance_of_rain
												: ''}
										</span>
									</div>
									<div className='item-temp'>{tempC}°C</div>
								</div>
							);
						})
				  )
				: ''}
		</div>
	);
};

export default WeeklyForecast;
