import { Link } from "react-router-dom";
import { domain } from "../Store/constants";
const Feature = (props) =>
{
    const { id, category, title, image } = props;
    return (
        <Link to={`/articles/${id}`}>
            <section className='featured-sections'>
                <p className='genre'>{category}</p>
                <img className="featured-image" src={`${domain}${image}/`} alt="blog" />
                <p title={title} className='featured-title'>{title.length > 40 ? title.slice(0, 40) + '...' : title.slice(0, 50)}</p>
            </section >
        </Link>
    );
}
export default Feature;
