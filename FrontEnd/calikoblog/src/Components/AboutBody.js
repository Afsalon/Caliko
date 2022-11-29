import { getCreator } from '../Services/getCreator';
import axios from 'axios';
import { useState, useEffect, useContext, useCallback } from 'react';
import { ContextApi } from '../App';
import { actions } from '../Store/actions';
import './css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { domain } from '../Store/constants';
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const AboutBody = () =>
{
    const { state, dispatch } = useContext(ContextApi);
    const [selectedItemAmount, setSelectedItemAmount] = useState();
    const [name,setName] = useState();
    const get_creator = useCallback(() =>
    {
        getCreator().then((response) =>
        {
            if (response.status === 200)
                dispatch({ type: actions.set_creator, payload: response.data })
        })

    }, [dispatch])
    useEffect(() =>
    {
        get_creator()
    }, [get_creator])

    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Failure loading the Razorpay SDK. PLease make sure you are connected to the internet')
			return
		}

    const orderData = await axios.post(`${domain}/createOrder/`, {
      amount: selectedItemAmount,
      name:name
    })

    const { amount, currency, order_id } = orderData.data


		const options = {
            key: process.env.REACT_APP_KEY,
            amount: amount.toString(),
            currency: currency,
            name: "Test Company",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const razorpay_paymentId = response.razorpay_payment_id
                const razorpay_orderId = response.razorpay_order_id
                const razorpay_signature = response.razorpay_signature

                const res = await axios.post(`${domain}/verifySignature/`, {
                  razorpay_paymentId,
                  razorpay_orderId,
                  razorpay_signature
                })

                alert(res.data.status)
            },
            prefill: {
                name: "John Doe",
                email: "doejon@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#61dafb",
            },
        };
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

    if (state.loading_creator)
    {
        return (
            <div className='creator-body'>
                <div className='loadingspinner'></div>
            </div>
        )
    }
    else
    {
        return (
            <main className='creator-body'>
                <section className='creator-top'>
                    <h1 className='creator-author'>
                        {state.creator.user.first_name} {state.creator.user.last_name}
                        <FontAwesomeIcon className='check' icon={faCheck} />
                    </h1>
                    <p className='creator-roles'>
                        {state.creator.skills}
                    </p>
                    <p className='creator-socials'>
                        <FaInstagram className='fa-instagram' /> <a target='blank' href={`${state.creator.social}`}>Instagram</a>
                        <FaLinkedin className='fa-linkedin' /> <a target='blank' href={`${state.creator.social_2}`}>Linkedin</a>
                    </p>
                </section>
                <section className='creator-about'>
                    <div className='left-about'>
                        <h1 className='creator-about-title'>About Me<FontAwesomeIcon className='author-logo' icon={faPenToSquare} /></h1>
                        <div className='underline1'></div>
                        <p className='creator-about-text'>
                            {state.creator.about}
                        </p>
                        <p className='creator-about-text-2'>
                            If you like what you read, consider donating a small amount
                            as I donate fifty percent of my profits in animal welfare
                        </p>
                    </div>
                    <div className='right-about'>
                        <div className="donation-box">
                          <p className="coffee">Buy A Coffee For Me</p>
                          <input type="text"  onChange={(e)=>setName(e.target.value)} className="donation-price" placeholder="Enter Your Name" style={{ marginBottom:'1rem'}}/>
                          <input type="number" onChange={(e)=>setSelectedItemAmount(e.target.value)} min="1" className="donation-price" placeholder="Amount (&#x20b9;)"/>
                          <button type="submit" className='donation-submit' onClick={displayRazorpay}>Donate</button>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

}

export default AboutBody;
