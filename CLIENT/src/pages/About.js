import Footer from "../components/Footer"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm("service_ttufe5h","template_3tinuhr",form.current, '20dBmRw3jjyZGnZGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.preventDefault();  
  };
  return (
    <div>
      <div>
      <p align="center" className="font-rampart text-6xl uppercase first-letter:text-9xl font-bold z-10 bg-transparent -skew-y-12"><strong>STUDENT</strong></p>
      <p align ="center"><img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" width = "40%" alt=""/>
      </p>
     </div>
     <hr/>
  <section className="flex flex-col gap-10 items-center">
    <h2>Summary</h2>
     <h2>Experience</h2>
     <ul>
     </ul>
     <form  ref={form} className="font-work flex flex-col" onSubmit={sendEmail}>
      <span>CONTACT FORM:-</span><br></br>
        <span className="">Name:</span>
        <input
          className="border-2 border-black rounded p-1 focus:outline-none bg-transparent"
          placeholder="Name" name="name"
          required 
        />
        <br />
        <br />
        <span className="">Email:</span>
        <input
          className="border-2 border-black rounded p-1 focus:outline-none bg-transparent"
          placeholder="abc@gmail.com" name="email"
          required 
        />
        <br />
        <br />
        <span className="">FEEDBACK:-</span>
        <textarea
          className="bg-transparent border-2 w-96 h-44 border-black"
          placeholder="Type something...." name="message"
          required
        />
        <br />
        <br />
        <button id="btn" type="submit">
          SEND
        </button>
      </form>
  </section>
    <Footer></Footer>
    </div>
  );
};

export default About;
