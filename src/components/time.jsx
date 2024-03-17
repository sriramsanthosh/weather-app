import { useEffect } from "react";
import WeatherGif from "../images/weather.gif";

const TimeBox = () => {
    
    useEffect(()=>{
        const sharedata = {
            title : "WeatherApp",
            text : "Know weather details in your city!",
            url : "/"
        };
        const btn = document.querySelector(".share-button");
        btn.addEventListener("click", async()=>{
            try{
                await navigator.share(sharedata);
            }
            catch(err){
                window.alert("Error in sharing link!");
            }
        });
        
        // const today = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const todayspan = document.querySelector(".today");
        const hours = document.querySelector(".hours");
        const minutes = document.querySelector(".minutes");
        const meridians = document.querySelector(".am-pm");
        updateTime();
        function updateTime(){
            var today = new Date();
            var index = today.getDay();
            var Hours = today.getHours();
            var Minutes = today.getMinutes();
            var Meridians = "AM";
            if(Hours>12){
                Hours-=12;
                Meridians = "PM";
            }
            else if(Hours === 0){
                Hours = 12;
                Meridians = "AM";
            }
            else if(Hours === 12){
                Meridians = "PM";
            }
            if(Number(Minutes) < 10){
                Minutes = "0"+Minutes;
            }
            if(Hours<10){
                hours.textContent = "0"+Hours;
            }
            else{
                hours.textContent = Hours;
            }
            minutes.innerHTML = Minutes;
            meridians.textContent = Meridians;
            todayspan.textContent = days[index];
        }
        
        
        setInterval(function(){
            updateTime();
        
        }, 15000);
    });

    return (
        <div>
            <div className="wish"><span className="hours"></span> : <span className="minutes"></span> <span className="am-pm"></span></div>
            <div className="wish"><span className="today">Saturday</span>&nbsp;!</div>
            <div className="weather-container sungif"> 
                <div className="weather-icon nobgcolor">
                    <img src={WeatherGif} alt="weather-icon"/> 
                </div> 
            </div>
            <div>Know weather at your city..</div>
            <div className="fifty-fifty-fifty share-button">
                <div className="temp feels"> <a href=""><i className="fa-solid fa-share-from-square"></i></a> </div>
                <div> Share </div>
            </div>
        </div>
    );
}

export default TimeBox;