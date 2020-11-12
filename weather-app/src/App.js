import React from 'react';
import PresentDay from './components/PresentDay';
import WeeklyForecast from './components/WeeklyForecast';
import './styles/style.css';

const App = () => {
	return (
		<div className='container'>
			<PresentDay query='los angeles' />
			<WeeklyForecast />
		</div>
	);
};

export default App;