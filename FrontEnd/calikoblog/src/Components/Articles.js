import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { domain } from '../Store/constants';
import { Link } from 'react-router-dom';

const Articles = (props) =>
{
    const { id, title, image, category, user, opening, created_date } = props;
    var date = new Date(created_date).toDateString();
    const title_start = 0;
    const title_end = 50;
    const opening_start = 0;
    const opening_ending1 = 70;
    const opening_ending2 = 120;
    return (
        <>
            <div className='article'>
                <section className="article-left">
                    <span className='article-genre'>{category}</span>
                    <Link to={`/articles/${id}/`}>
                        <img className="article-left-image" src={`${domain}${image}`} alt="article" />
                    </Link>
                </section>

                <section className='article-right'>
                    <Link to={`/articles/${id}/`}>
                        <p className='article-right-title'>{title.slice(title_start, title_end)}{title.length > title_end ? '...' : ''}</p>
                    </Link>
                    <p className='article-date'>{date}</p>
                    <p className='article-opening'>{opening.slice(opening_start, opening_ending1)}<br />
                        {opening.slice(opening_ending1, opening_ending2)}{opening.length > opening_ending2 ? '...' : ''}
                    </p>
                    <p className='article-author'>-{user}<FontAwesomeIcon style={{ marginLeft: '1rem' }} icon={faPenToSquare} /></p>
                </section>
            </div>
            <div className='divider'></div>
        </>
    );
}

export default Articles;
