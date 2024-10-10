import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 min-h-[12rem]">
      {/* Bubble container */}
      <div className="absolute inset-0 overflow-hidden z-0 bubbles">
        {[...Array(128)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              "--size": `${2 + Math.random() * 4}rem`,
              "--distance": `${6 + Math.random() * 4}rem`,
              "--position": `${-5 + Math.random() * 110}%`,
              "--time": `${2 + Math.random() * 2}s`,
              "--delay": `${-1 * (2 + Math.random() * 2)}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="tracking-wider heading">
            <h1 className="text-lg mb-2">Loca Musica</h1>
          </div>
          <div className="flex flex-col items-start">
            <a href="#" className="text-lg">
              Home
            </a>
            <a href="#" className="text-lg">
              About
            </a>
            <a href="#" className="text-lg">
              Contact
            </a>
          </div>
        </div>
        <div>
          <div className="tracking-wider heading">
            <h1 className="text-lg mb-2">Office</h1>
          </div>
          <p>123 Harmony Street</p>
          <p>Melody Town, CA 90210</p>
          <p>info@locomusica.com</p>
          <h4 className="mt-2">+1 (555) 123-4567</h4>
        </div>
        <div>
          <div className="tracking-wider heading">
            <h1 className="text-lg ">Newsletter</h1>
          </div>
          <div class="inputbox mt-4">
            <input required="required" type="text" />
            <span>Email</span>
            <i></i>
          </div>
          <div class="card">
            <ul>
              <li class="iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="">
                  <svg
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <div class="text">Facebook</div>
              </li>
              <li class="iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <div class="text">Twitter</div>
              </li>
              <li class="iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <div class="text">Instagram</div>
              </li>
              <li class="iso-pro">
                <span></span>
                <span></span>
                <span></span>
                <a href="#">
                  <svg
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.3 283.3 32 224.2 32c-118.1 0-213.5 95.3-213.5 213.4 0 37.6 9.8 74.2 28.6 106l-30.5 111.5L128 388.3c30.7 16.8 65.4 25.6 100.1 25.6 118.2 0 213.6-95.3 213.6-213.5 0-59.1-23.3-114.8-65.2-156.6zm-156.7 309.3c-32.6 0-64.4-8.7-92.2-25.2l-6.6-3.9-70.7 18.8 18.8-68.7-4.3-7C51.6 290.8 42 260.2 42 229.3 42 135.4 129.3 48 224.2 48c53.1 0 103.1 20.7 140.6 58.3 37.5 37.5 58.3 87.4 58.3 140.5-.1 111.2-90.5 201.6-201.6 201.6zm121.1-148.8c-6.7-3.4-39.5-19.5-45.6-21.7-6.2-2.2-10.7-3.4-15.1 3.4-4.4 6.7-17.4 21.7-21.3 26.2-3.9 4.4-7.8 5-14.5 1.7-39.5-19.7-65.4-35.2-91.8-80-6.9-11.8 6.9-10.9 19.7-36.1 2.2-4.4 1.1-8.3-0.6-11.7-1.7-3.4-15.1-36.3-20.7-49.8-5.6-13.4-11.3-11.6-15.1-11.8-3.9-.2-8.3-.2-12.7-.2s-11.7 1.7-17.8 8.3c-6.2 6.7-23.5 23-23.5 56s24.1 64.9 27.4 69.4c3.4 4.4 47.2 72.1 114.5 100.8 67.4 28.7 67.4 19.1 79.5 17.9 12.2-1.2 39.5-16.1 45-31.8 5.6-15.7 5.6-29.2 3.9-31.8-1.7-2.8-6.2-4.5-13-8z" />
                  </svg>
                </a>
                <div class="text">WhatsApp</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <p className="copyright">
            <span className="heading">© 2024 Loco Musica.</span> <br />
            Bringing the rhythm to your taste buds, one order at a time!
          </p>
        </div>
      </div>

      {/* SVG filter for bubble effect */}
      <svg style={{ position: "absolute", top: "100%", height: 0 }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
