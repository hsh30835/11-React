import { useState } from "react";

switch(weather) {
    case 'Clear': imojiName = 'sunny'; break;
    case 'Rain': imojiName = 'umbrella'; break;
    case 'Thunderstom': imojiName = 'cloud_with_lightning_and_rain'; break;
    case 'Drizzle': imojiName = 'cloud_with_rain'; break;
    case 'Snow': imojiName = 'snowman'; break;
    case 'Clouds': imojiName = 'cloud'; break;
    case 'Atmosphere': imojiName = 'airplane';
}

const ExampleWeather = () => {
    const[imojiName,setImojiName]=useState('');
    const[cityName,setCityName]=useState('');

    const onChangeHandler = (e) => {
        setImojiName(e.target.value);
    }
}