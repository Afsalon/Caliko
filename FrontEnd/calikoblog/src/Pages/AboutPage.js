import Navbar from "../Components/Navbar";
import Navfoot from "../Components/Navfoot";
import AboutBody from "../Components/AboutBody";
const AboutPage = () =>
{
    return (
        <main className="about-bg">
            <Navbar />
            <AboutBody />
            <Navfoot />
        </main>
    )
}

export default AboutPage;