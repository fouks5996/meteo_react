import React from "react";
import Card from "./Card";

function Cards(props) {
	const { data } = props;
	return (
		<div className='flex gap-12'>
			{data.map(({ datetime, app_max_temp, app_min_temp, weather }, index) => (
				<Card
					index={index}
					date={datetime}
					img={weather}
					tempMax={app_max_temp}
					tempMin={app_min_temp}
				/>
			))}
		</div>
	);
}

export default Cards;
