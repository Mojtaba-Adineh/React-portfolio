import React, {useState} from 'react';
import "./contact.scss";
import shakeHand from "../../assets/shake.svg"

const Contact = () => {
    const [message , setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        setTimeout(() => setMessage(false), 4000);
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src={shakeHand} alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} action="">
                    <input type="email" placeholder='Email'/>
                    <textarea placeholder='Message...'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thank's for the reply , I'll answer ASAP!</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;