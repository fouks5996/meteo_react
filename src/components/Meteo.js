import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Cards from "./Cards";

function Meteo(props) {
	const [weather, setWeather] = useState([]);
	const [city, setCity] = useState();
	const { latitude, longitude } = props;

	let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&days=5&lang=fr&key=b030421a544f4d6cabcffdcc7c936b46`;

	const FetchData = () => {
		const fetchWeather = async () => {
			const response = await fetch(url);
			const jsonData = await response.json();
			setCity(jsonData.city_name);
			setWeather(jsonData.data);
		};
		fetchWeather();
	};

	useEffect(() => {
		FetchData();
	}, [setWeather]);

	function ChangeUrl(e) {
		url = `https://api.weatherbit.io/v2.0/forecast/daily?&city=${e.target.id}&days=5&lang=fr&key=b030421a544f4d6cabcffdcc7c936b46`;
		FetchData();
	}

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<h1 className='mb-16 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
				Voici la météo de {city}
			</h1>
			<Cards data={weather} />
			<div className='flex gap-3 mt-8'>
				<Buttons func={ChangeUrl} id='Tokyo' label='Tokyo' />
				<Buttons func={ChangeUrl} id='San-francisco' label='San Francisco' />
				<Buttons func={ChangeUrl} id='Libreville' label='Libreville' />
				<Buttons func={ChangeUrl} id='Montréal' label='Montréal' />
				<Buttons func={ChangeUrl} id='Paris' label='Paris' />
				<Buttons func={FetchData} id='Current' label='Current position' />
			</div>
		</div>
	);
}

export default Meteo;
