import { useNavigate, NavLink} from "react-router-dom";



const Header = () => {
    const Navigate = useNavigate();
    let handleForm = async(e)=>{
        e.preventDefault();
        let city = e.target.city.value.toLowerCase().trim();
        Navigate(`/weather-at/${city}`, {state:{data: city}});   
    }

    return (
        <div>
            <NavLink to="/"><h1 className="appHeading"><img src={require("../images/icons/01d.png")} alt=""/>WeatherApp</h1></NavLink>
            <form className="form-container" onSubmit={(e)=>{
                handleForm(e);
            }}>
                <input className="input-box input-city" type="text" name="city" id="city" placeholder="Search City *" required />
                <button className="input-box input-search" type="submit"><i className="fa-solid fa-magnifying-glass" ></i></button>
            </form>       
            <hr/>
        </div>
    );
  
}

export default Header;