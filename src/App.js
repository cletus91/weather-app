import React from 'react';
import PresentDay from './components/PresentDay';
import HourlyForecast from './components/HourlyForecast';
import './styles/style.css';

const App = () => {
	return (
		<div className='container'>
			<PresentDay />
			<HourlyForecast />
		</div>
	);
};

export default App;
