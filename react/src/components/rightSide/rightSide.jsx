import "./rightSide.scss";
import IMG1 from "../img/news/coolest.jpg";
import IMG2 from "../img/news/hardik.jpg";
import IMG3 from "../img/article/phone.jpg";
import IMG4 from "../img/wether/sun.svg";
import DEG from "../../iconsfont/deg.png";
import { useEffect, useState } from "react";
import PostService from "../../api/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../loader/loader";

export default function RightSide() {
  const [sity, setSity] = useState("Dnipro");
  const [weather, setWeather] = useState([]);

  const [fetchWeather, isPostsLoading, articleError] = useFetching(async () => {
    const respons = await PostService.getWeather(sity);
    setWeather(respons);
  });

  useEffect(() => {
    fetchWeather();
  }, [sity]);

  const temp = Math.round(weather?.data?.main.temp);
  const icon = weather.data?.weather[0].icon;

  return (
    <>
      {isPostsLoading && <Loader />}
      {articleError && (
        <h2 style={{ marginLeft: 20, color: "red" }}>Error: {articleError}</h2>
      )}

      <div className="page__left-side left-side">
        <div className="rightSide">
          <div className="weather">
            <h3 className="weather_sity">{weather.data?.name}</h3>
            <div className="weather_body">
              <div className="weather_main">
                <div className="weather_temp">{temp}
                <img src={DEG} />
                </div>
                <div className="weather_status">
                  {weather.data?.weather[0].description}
                </div>
              </div>
              <div className="weather_img">
                <img style={{ width: '100px'}} src={`https://api.openweathermap.org/img/w/${icon}`} />
              </div>
            </div>
          </div>

          <div className="right_img" alt="Img">
            <img src={IMG3} />
          </div>
          <div className="right_img" alt="Img">
            <img src={IMG1} />
          </div>

          <div className="right_img" alt="Img">
            <img src={IMG2} />
          </div>
          <div className="right_img" alt="Img">
            <img src={IMG4} />
          </div>
        </div>
      </div>
    </>
  );
}
