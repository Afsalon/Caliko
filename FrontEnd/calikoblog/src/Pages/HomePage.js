import Navbar from "../Components/Navbar";
import Navfoot from "../Components/Navfoot";
import HomeBody from "../Components/HomeBody";
import Featured from '../Components/Featured';

const HomePage = () =>
{
    return (
        <main className="home-bg">
            <Navbar />
            <HomeBody />
            <Featured />
            <Navfoot />
        </main>
    )
}
export default HomePage;