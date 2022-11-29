import Navbar from '../Components/Navbar';
import Navfoot from '../Components/Navfoot';
import SearchBody from '../Components/SearchBody';
const SearchPage = () =>
{
    return (
        <main className='search-bg'>
            <Navbar />
            <SearchBody />
            <Navfoot />
        </main>
    );
}
export default SearchPage;