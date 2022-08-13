import React from 'react'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'


const Contact = () => {
    const formRef=useRef()
    const [done, setDone]=useState(false)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_ektt7gn', 'template_q9vse4f', formRef.current, '8sGk6Hrnp2oMg5pdi')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='c'>
        <div className="c-bg"> </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                        
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 8296343964
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            sumukhaganesh@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda similique veniam deleniti, in perspiciatis, repudiandae, dicta veritatis et voluptates explicabo! Illo eligendi sapiente quis quibusdam aperiam commodi illum ex?
                        </div>
                    </div>
                </div>
                <div className="c-right">

                    <p className="c-desc">
                        <b>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae debitis eius cupiditate, quam quas sint deserunt laboriosam reprehenderit eos veniam doloremque dolorem expedita error illo assumenda ipsa officia voluptas? Error sunt dicta quaerat nisi quos voluptate recusandae provident consectetur vitae.
                        </b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor : darkMode && "#333"}}type="text" placeholder='Subject' name='user_subject'/>
                        <input style={{backgroundColor : darkMode && "#333"}}type="text" placeholder='Email' name='user_email'/>
                        <input style={{backgroundColor : darkMode && "#333"}}type="text" placeholder='Name' name='user_name'/>
                        <textarea placeholder="Message" style={{backgroundColor : darkMode && "#333"}} name="message" id=""  rows="5"></textarea>
                        <button className="submit">Submit</button>
                        {done && <h2>Thankyou!! will get back to you soon</h2>}

                    </form>
                </div>
            </div>

       
    </div>
  )
}

export default Contact