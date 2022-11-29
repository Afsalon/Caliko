import Navbar from '../Components/Navbar';
import Navfoot from '../Components/Navfoot';
import MailBody from '../Components/MailBody';


const MailPage = () =>
{
    return (
        <main className='mail-bg'>
            <Navbar />
            <MailBody />
            <Navfoot />
        </main>
    )
}

export default MailPage;