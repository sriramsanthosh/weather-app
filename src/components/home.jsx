import TimeBox from "./time";
import Header from "./header";

const Home = () => {
    return (
        <div>
            <main>
                <div className="container"> 
                    <Header />
                    <TimeBox />
                </div>
            </main>
            <footer>
                <div className="text-center">Made with 💖 by <a className="author" href="https://www.linkedin.com/in/sriramsanthosh/" target="_blank">Sriram&nbsp;Santhosh</a></div>
            </footer>
        </div>
    );
}

export default Home;