import React from "react";

function Card(props) {
	const { index, date, img, tempMax, tempMin } = props;

	const day = new Date(date).toLocaleDateString("fr-FR", {
		weekday: "long",
	});

	return (
		<div key={index} className='flex flex-col justify-center items-center'>
			<h5 className='text-2xl'>{day}</h5>
			<img
				alt={img.description}
				src={`https://www.weatherbit.io/static/img/icons/${img.icon}.png`}></img>
			<div>
				<p> Max : {tempMax}°C </p>
				<p> Min : {tempMin}°C </p>
			</div>
		</div>
	);
}

export default Card;
