
import { useParams } from "react-router-dom";
import Header from "./header";
import { useEffect, useState } from "react";
import TimeBox from "./time";
import CityNotFound from "./404";

const WeatherDetails = () => {
  const {id} = useParams();
  const [Resp, setResp] = useState();
  let city = id;

  async function apiFetch(){
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let data = await(await fetch(url, {
        method: "POST",
        body: JSON.stringify()
    })).json();
    switch(await data.cod){
        case 200:
            let kelvin = 273.15;
              setResp({
                  temp: Math.round(data.main.temp-kelvin),
                  feels_like : Math.round(data.main.feels_like-kelvin),
                  max_temp : Math.round(data.main.temp_max-kelvin),
                  min_temp : Math.round(data.main.temp_min-kelvin),
                  pressure : data.main.pressure,
                  humidity : data.main.humidity,
                  wind_speed: data.wind.speed, 
                  city : data.name,
                  icon : data.weather[0].icon,
                  matter: data.weather[0].main,
                  description :data.weather[0].description,
                  countryCode: data.sys.country,
              });
              break;
              case '404':
                  alert(data.message);
                  setResp();
                  break; 
              default:
              }
            }
            
            useEffect(()=>{
              if(!Resp){
                apiFetch();
              }
              else{
                apiFetch();
              }
            }, [city]);

  
  return (
    <div>
      <main>
        <div className="container">
          <Header />
          {!Resp && <CityNotFound />}
          {Resp && <div className="weather-container">
            <div className="weather-icon">
              < img src={require(`../images/icons/${Resp.icon}.png`)} alt="weather-icon" />
            </div>
          </div>}
          {Resp && <div>
            <div className="temp">{Resp.temp} &deg;C</div>
            <div className="matter">{Resp.matter}</div>
            <div className="weather-description">{Resp.description}</div>
            <div className="location"><i className="fa-solid fa-location-dot"></i> {Resp.city}, {Resp.countryCode}</div>
            <hr />
            <div className="fifty-fifty-container">
              <div className="fifty-fifty">
                <div className="fifty-fifty-fifty">
                  <i className="fa-solid fa-temperature-three-quarters"></i>
                  <div className="temp feels">{Resp.feels_like}&deg;C</div>
                  <div> Feels Like </div>
                </div>
              </div>
              <div className="fifty-fifty">
                <div className="fifty-fifty-fifty">
                  <i className="fa-solid fa-droplet"></i>
                  <div className="temp feels">{Resp.humidity}%</div>
                  <div> Humidity </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="fifty-fifty-container">
              <div className="fifty-fifty">
                <div className="fifty-fifty-fifty">
                  <i className="fa-solid fa-wind"></i>
                  <div className="temp feels"> {Resp.wind_speed} km/h</div>
                  <div> Wind </div>
                </div>
              </div>
              <div className="fifty-fifty">
                <div className="fifty-fifty-fifty share-button">
                  <div className="temp feels"> <a href=""><i className="fa-solid fa-share-from-square"></i></a> </div>
                  <div> Share </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </main>
      <footer>
        <div className="text-center">Made with 💖 by <a className="author" href="https://www.linkedin.com/in/sriramsanthosh/" target="_blank">Sriram&nbsp;Santhosh</a></div>
      </footer>
    </div>
    
    
  );
}

export default WeatherDetails;
