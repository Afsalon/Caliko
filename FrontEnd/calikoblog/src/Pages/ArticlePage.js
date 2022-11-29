import Navbar from '../Components/Navbar';
import Navfoot from '../Components/Navfoot';
import ArticleBody from '../Components/ArticleBody';

const ArticlePage = () =>
{
    return (
        <div className='article-bg'>
            <Navbar />
            <ArticleBody />
            <Navfoot />
        </div>
    )
}

export default ArticlePage;