import { useState } from "react";
import { useRef } from "react";
import "./contact.scss"
import emailjs from 'emailjs-com';

export default function Contact() {

  const formRef = useRef()

  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_g3tmytj', 'template_gv7gtch', formRef.current, 'WM4HgwkyfH6Ho6_gq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact" id= "contact">
        <div className="left">
          <img src="assets/email.png" alt="" />
        </div>
        <div className="right">
          <h2>Let's Connect.</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea placeholder="Write your message here." name="message"/>
            <button type="submit">Send</button> 
            {message && <span>Thank you. I'll get back to you soon.</span>}
          </form>
        </div>
    </div>
  )
}
