import Navbar from '../Components/Navbar';
import Navfoot from '../Components/Navfoot';
import BlogBody from '../Components/BlogBody';
import Featured from '../Components/Featured';

const BlogPage = () =>
{
    return (
        <main className="blog-bg">
            <Navbar />
            <BlogBody />
            <Featured />
            <Navfoot />
        </main>
    )
}
export default BlogPage;