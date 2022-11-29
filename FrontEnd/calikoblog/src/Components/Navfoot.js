import './css/navfoot.css';
import { instagram, linkedin } from '../Store/constants';
import { Link } from 'react-router-dom';
const Navfoot = () =>
{
    return (
        <div className="navfoot">
            <section className='navfoot-information'>
                <h3 className='navfoot-title'>CalikoBlog</h3>
                <p className='navfoot-content'>Thanks For Reading. It means a lot.</p>
                <p className='navfoot-content'>I donate fifty percent of my profits in animal welfare</p>
            </section>
            <section className='navfoot-links'>
                <h3 className='navfoot-title'>Contact me here</h3>
                <p className='navfoot-content'><a target="_blank" rel="noreferrer" className="social-link" href={instagram}>Instagram</a> | <a target="_blank" rel="noreferrer" className="social-link" href={linkedin}>LinkedIn</a></p>
                <Link to="/mail/" className='navfoot-content'>You can mail me here</Link>
            </section>
        </div>
    );
}
export default Navfoot;
