import React from 'react';
import moment from 'moment-timezone';

require('dotenv').config();
const WeeklyForecast = ({ forecast, day }) => {
	console.log(forecast);
	return (
		<div className='hourly-forecast'>
			{forecast
				? forecast.map((currentDay) =>
						currentDay.hour
						.filter(hour => !moment(hour.time).isBefore(moment()))
						.map((allHours) => {
							let tempC = Math.floor(allHours.temp_c);
							let time = moment(allHours.time).format('hh:mm A');
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
