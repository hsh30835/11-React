import FoodApi from "./03_data-component/00_food-api-test";
import TestApi from "./03_data-component/00_test-api";
import Container from "./03_data-component/01_rendering-component";
import Weather from "./03_data-component/02_weather-promise";
import WeatherContainer from "./03_data-component/03_weather-async-await";
import ApiCompnent from "./api/02_fetch_then";
import AxiosCallComponent from "./api/03_axios";
import ImojiContainer from "./api/04_github-api-emoji";

function App() {
  return (
    <>
      {/* {<ApiCompnent/>} */}
      {/* <AxiosCallComponent/> */}
      {/* <ImojiContainer/> */}
      {/* <Container/> */}
      {/* <Weather/> */}
      {/* <WeatherContainer/> */}
      {/* <TestApi/> */}
      <FoodApi/>
    </>
  );
}

export default App;
