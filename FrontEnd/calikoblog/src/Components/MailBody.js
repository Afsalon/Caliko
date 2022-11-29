import './css/mail.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StateBox = (prop) =>
{
    const { sub, wait, error } = prop;
    if (wait)
    {
        return (
            <div className='mail-submitted'>
                <p className='loadingspinner'></p>
                <p className='submitted-text'> Wait Please</p>
            </div>
        )
    }
    else if (sub)
    {
        return (
            <div className='mail-submitted'>
                <div className='mail-submitted-line1'>
                    <p className='submitted-text'> Submitted </p>
                    <FontAwesomeIcon className='check' icon={faCheck} />
                </div>
                <Link className='category-button' to="/">Go Back</Link>
            </div>
        )
    }
    else if (error)
    {
        return (
            <div className='mail-submitted'>
                <div className='mail-submitted-line1'>
                    <p className='submitted-text'> Please Check Your Email </p>
                    <FontAwesomeIcon className='uncheck' icon={faXmark} />
                </div>
                <Link className='category-button' to="/">Go Back</Link>
            </div>
        )
    }
}
const MailBody = () =>
{
    const form = useRef();
    const [sub, setSub] = useState(false);
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(false)
    const [check, setCheck] = useState(false);
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setCheck(true);
        setWait(true);

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) =>
            {
                if (result.text === "OK")
                {
                    setWait(false)
                    setSub(true);
                }
                else
                {
                    setWait(false);
                    setError(true);
                }
            }, (error) =>
            {
                setWait(false);
                setError(true);
            });
    }
    return (
        <div className='mailbody'>
            {check ?
                <StateBox sub={sub} error={error} wait={wait} /> :
                <form ref={form} className='mail-form' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='mail-title'>Write a mail</h1>
                    <p className='mail-info'>We love to here from you</p>
                    <input name='name' type="text" className='mail-name' placeholder='Name' />
                    <input name='email' type="email" className='mail-name' placeholder='Email Address' /><span className='email-help-text'>Please Make sure your email is correct</span>
                    <textarea name='message' type="text" className='mail-message' placeholder='Your Message' />
                    <input type='submit' className='mail-button' />
                    <ul className='mail-notice'>
                        <li>Check your email</li>
                        <li>Feedbacks are appreciated.</li>
                        <li>Send us your work, and get an oppurtunity to get featured on CalikoBlog!</li>
                    </ul>
                </form>}

        </div>
    )
}
export default MailBody;
