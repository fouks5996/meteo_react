import Meteo from "./components/Meteo";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

function App() {
	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	const [userPermission, setUserPermission] = useState(false);

	useEffect(() => {
		const getPosition = (position) => {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
			setUserPermission(true);
		};

		navigator.geolocation.getCurrentPosition(getPosition);
	});

	return (
		<div className='flex justify-center items-center h-screen'>
			{!userPermission ? (
				<Loading />
			) : (
				<Meteo latitude={lat} longitude={long} />
			)}
		</div>
	);
}

export default App;
