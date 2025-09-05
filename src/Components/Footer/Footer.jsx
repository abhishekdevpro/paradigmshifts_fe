import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo2 from "./logodb.png";
import logo from "./logo.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-teal-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Certifications */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-26 h-20 mr-3 p-1 bg-white rounded-md">
                <img
                  src={logo}
                  alt="Paradigm Shift Logo"
                  className="h-full w-full overflow-hidden object-cover"
                />
              </div>
              <span className="text-2xl font-bold">Paradigm Shift</span>
            </div>
            <p className="text-sm mb-4 text-white">
              Drug, Monitoring Rehab and Retention
            </p>
            <div className="flex space-x-2">
              <img src={logo2} alt="SBE" className="w-24 h-14" />
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/aboutus" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/what-we-do" className="text-sm hover:underline">
                  What We Do
                </a>
              </li>
              <li>
                <a href="/join" className="text-sm hover:underline">
                  Join With Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-4">Address</h3>
            <p className="text-sm text-gray-100">
              1509 Lady St,
              <br />
              Columbia SC, 29201,
              <br />
              United States.
            </p>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a
                  href="mailto:Info@paradigmshifts.life"
                  className="text-sm hover:underline"
                >
                  Info@paradigmshifts.life
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a
                  href="mailto:hr@paradigmshifts.life"
                  className="text-sm hover:underline"
                >
                  hr@paradigmshifts.life
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-8 pt-8 border-t border-teal-800 flex flex-wrap justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-white">
            © 2025 Copyrights by Hyper V Solutions. All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
