import './css/home.css';
import { Link } from 'react-router-dom';
const HomeBody = () =>
{
    return (
        <main className="home-main">
            <section className='home-main-left'>
                <h1 className='home-welcome'>Welcome To CalikoBlog</h1>
                <h2 className='welcome-motto'>Read. Implement. Grow. Live.</h2>
                <h1 className='discovery'>Discover More</h1>
                <Link to="/articles/"><button className='articles-button'>Articles</button></Link>
                <Link to="/articles/search/"><button className='articles-button'>Explore</button></Link>
            </section>
        </main >
    );
}
export default HomeBody;
