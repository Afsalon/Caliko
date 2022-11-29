import './css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const newStyle = {
    position: 'fixed',
    zIndex: 3,
    top: '0',
    backgroundPosition: 'right',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
}
const oldStyle = {
    display: 'none'
}
const Navbar = () =>
{
    const [modal, setModal] = useState(oldStyle);
    return (
        <div className='navbar'>
            <Link to='/'><p className='navbar-logo'>CalikoBlog</p></Link>
            <section className='navbar-list'>
                <Link to='/articles/'><p>Articles</p></Link>
                <Link to='/mail/'><p>Mail</p></Link>
                <Link to={`/articles/search/`}><p>Search</p></Link>
            </section>
            <Link className='navbar-about' to='/about/'><p>About</p></Link>
            <FontAwesomeIcon className="fa-bars" icon={faBars} onClick={() => setModal(newStyle)} />
            <div style={modal}>
                <p className='cross-ham' onClick={() => setModal(oldStyle)}>x</p>
                <Link to='/articles/'><p>Articles</p></Link>
                <Link to='/mail/'><p>Mail</p></Link>
                <Link to={`/articles/search/`}><p>Search</p></Link>
                <Link className='navbar-about-ham' to='/about/'><p>About</p></Link>
            </div>
        </div>
    );
}
export default Navbar;
