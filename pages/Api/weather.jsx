import React from "react";

const { REACT_APP_WEATHER } = env.process;

const getdata = async (city)=>{
  const response = fetch(
		`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER}`
	);
  return await response.json
}

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export default getdata;