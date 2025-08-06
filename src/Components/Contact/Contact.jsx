import React from 'react'
import style from '../Contact/Contact.module.css'
import messageicon from '../../assets/icons8-message-48.png'
import arrow from '../../assets/icons8-arrow-50.png'
import phoneicon from '../../assets/icons8-phone-48.png'
import gmailicon from '../../assets/icons8-gmail-48.png'
import addressicon from '../../assets/icons8-address-48.png'

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b6e865f6-8beb-4606-9b90-7c8eea3d7247");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact'>
            <div className={style.headingWrapper}>
                <h4 className={style.subheading}>Contact Us</h4>
                <h1 className={style.heading}>Get in Touch</h1>
            </div>


            <div className={style.contact}>
                <div className={style.contactcol}>
                    <h3>
                        Send Us a Message <img src={messageicon} alt="Message Icon" />
                    </h3>
                    <p>
                        Have a question, suggestion, or want to collaborate with us? We’d love to hear from you!
                        Whether you're looking for support, exploring partnership opportunities, or just want to say hello,
                        our team is here and ready to connect. Feel free to drop us a message anytime —
                        we’re always open to new ideas, meaningful conversations, and creative ventures.
                        Your thoughts matter, and we’re committed to providing the best experience possible.
                        Let’s make something amazing together!
                    </p>


                    <ul>
                        <li>
                            <img src={gmailicon} alt="Email Icon" /> contact@univisionglobal.org
                        </li>
                        <li>
                            <img src={phoneicon} alt="Phone Icon" /> +1 (415) 555-0198
                        </li>
                        <li>
                            <img src={addressicon} alt="Location Icon" />
                            221B Baker Street, London, UK <br />
                            Office 42, Silicon Plaza, San Francisco, CA, USA
                        </li>
                    </ul>


                </div>
                <div className={style.contactcolumn}>
                    <form action="" onSubmit={onSubmit}>
                        <label htmlFor="">your name</label>
                        <input type="text" name='name' placeholder='enter your name' required />
                        <label htmlFor="">phone number</label>
                        <input type="tel" name="phone" id="" placeholder='enter your mobile number' required />
                        <label htmlFor="">write your message</label>
                        <textarea name="message" rows={6} placeholder='enter your message' required></textarea>
                        <button type="submit" className='btn darkbutton '>submit now <img src={arrow} alt="" /> </button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>

        </div>
    )
}
