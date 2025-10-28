import { useState } from "react";
import style from './contact.module.css';

function Contact(){
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [phone, setPhone] = useState("");
    const [PhoneError, setPhoneError] = useState("");

    const [message, setmessage] = useState("");
    const [messageError, setmessageError] = useState("");

    const validateName = () => {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!regex.test(name)) {
      setNameError("Invalid name. Must start with a capital letter.");
    } else {
      setNameError("");
    }
  };

   const validateEmail = () => {
    const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setEmailError("Invalid email. eg. admin@gmail.com.");
    } else {
      setEmailError("");
    }
  };

 const validatePhone = () => {
    const regex = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (!regex.test(phone)) {
      setPhoneError("Invalid phone number. Must be at least 10 digits.");
    } else {
      setPhoneError("");
    }
  };
    return <section className={` py-5 text-center`}>
        <h2 className="text-uppercase py-5">Contact me</h2>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <form className={`${style.contactForm}`}>
                        <div className="form-floating mb-3">
                    <input type="text"  className={`form-control ${nameError ? "is-invalid" : "is-valid"}`} id="nameInput" 
                      value={name}  onChange={(e) => setName(e.target.value)} onBlur={validateName} placeholder="Username.."/>
                         <label htmlForfor="nameInput">Full name</label>
                          {nameError && (<div className="invalid-feedback">{nameError}</div>)}
</div>
  <div className="form-floating mb-3">
  <input type="email" className={`form-control ${emailError? "is-invalid" : "is-valid"}`} 
  value={email} onChange={(e)=> setEmail(e.target.value)} onBlur={validateEmail} id="emailInput" placeholder="name@example.com"/>
  <label for="emailInput">Email address</label>
  {emailError && (<div className="invalid-feedback">{emailError}</div>)}
</div>
<div className="form-floating mb-3">
  <input type="text" className={`form-control ${PhoneError? "is-invalid" : "is-valid"}`} 
  value={phone} onChange={(e)=> setPhone(e.target.value)} onBlur={validatePhone} id="phoneInput" placeholder="+#######"/>
  <label for="phoneInput">Phone number</label>
  {PhoneError && (<div className="invalid-feedback"> {PhoneError}</div>)}
</div>

<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Message</label>
</div>
<button className={`${style.contactFormBtn} btn mainColor-Bg text-light rounded-2 py-3 mt-3`}>Send</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
}
export default Contact;