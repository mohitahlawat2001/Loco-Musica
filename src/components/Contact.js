import React from 'react';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub , faXTwitter , faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode); 
  },);
   console.log(isDarkMode)
    return (
      <div className={isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}>

     
        <section className="py-12">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
    <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="mb-4">We’d love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us through our social media channels or by using the contact form below.</p>
        <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
        <ul className="mb-6">
          <li className="mb-2">
            <Link to="https://www.linkedin.com/in/mohitahlawat/" className='mx-2' >
          <FontAwesomeIcon icon={faLinkedin} /> 
          </Link> Connet with me on LinkedIn
                 </li>
          <li className="mb-2">
            <Link to="https://www.github.com/mohitahlawat2001/" className='mx-2' >
            <FontAwesomeIcon icon={faGithub} />
            </Link>
            look at my projects on GitHub
          </li>
          <li className="mb-2">
            <Link to="https://www.twitter.com/mahlawat2001/" className='mx-2' >
          <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          Follow me on Twitter
          </li>
          <li className="mb-2">
            <Link to="https://discordapp.com/users/761943074426454026" className='mx-2' >
          <FontAwesomeIcon icon={faDiscord} />
          </Link>         
          send me a message on Discord
           </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
        <form onSubmit={(e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  window.location = `mailto:mohitahlawat.2001.ma@gmail.com?subject=Contact&body=Email: ${email}, Message: ${message}`;
}} method="post" encType="text/plain" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium ">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required></textarea>
          </div>
          <div>
            <button type="submit" className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
 </div>

    )
}

export default Contact;