import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../images/logoNew.png';

const Footer = () => {
  return (
    <footer className="bg-primary pt-6 pb-2 text-tertiary rounded-t-sm rounded-b-lg">
      <h2 className="text-lg font-semibold text-center mb-4">अधिक जानकारी के लिए सम्पर्क करें</h2>
      
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center md:divide-x divide-tertiary/50 border-b pb-4 border-tertiary/50">
  
        {/* Column 1 */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center justify-center">
          <img src={logo} alt="Logo" className="h-36 p-1 rounded-full transition-transform transform hover:scale-105" />
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-start md:items-start justify-center">
          <div className='flex flex-col mx-auto'>
            <div className="flex items-start mb-4 text-center md:text-left">
              <FaMapMarkerAlt className="mr-2 text-xl text-orange-600" />
              <div className="text-md">
                <p className="font-semibold">निदेशक, जन शिक्षण संस्थान, बीकानेर</p>
                <p>प्रौढ़ शिक्षा भवन,</p>
                <p>सरस्वती पार्क के पास,</p>
                <p>पुरानी गिन्नाणी, बीकानेर (राज.) (334001)</p>
              </div>
            </div>
            <div className="flex items-center mb-4 text-center md:text-left">
              <FaPhoneAlt className="mr-2 text-xl text-orange-600" />
              <p className="text-md">+91 151 2970778</p>
            </div>
            <div className="flex items-center text-center md:text-left">
              <FaEnvelope className="mr-2 text-xl text-orange-600" />
              <p className="text-md">
                <a href="mailto:jssbikaner@gmail.com" className="hover:text-gray-600 transition duration-300 ease-in-out">
                  jssbikaner@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/3 p-4 pt-1 flex flex-col items-center md:items-start justify-center">
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">हमसे जुड़ें</h3>
          <div className="flex flex-col space-y-3">
            <a href="https://www.facebook.com/JanShikshanSansthanBikaner" target="_blank" rel="noopener noreferrer" className="flex items-center text-md hover:text-orange-600 transition duration-300 ease-in-out">
              <FaFacebookF className="mr-3 text-xl text-blue-600" />
              <span>Jan Shikshan Sansthan Bikaner</span>
            </a>
            <a href="https://twitter.com/Bikanerjan" target="_blank" rel="noopener noreferrer" className="flex items-center text-md hover:text-orange-600 transition duration-300 ease-in-out">
              <FaTwitter className="mr-3 text-xl text-blue-400" />
              <span>@Bikanerjan</span>
            </a>
            <a href="https://www.instagram.com/jssbikaner" target="_blank" rel="noopener noreferrer" className="flex items-center text-md hover:text-orange-600 transition duration-300 ease-in-out">
              <FaInstagram className="mr-3 text-xl text-pink-500" />
              <span>jssbikaner</span>
            </a>
          </div>
        </div>
      </div>

      
      {/* Footer bottom */}
      <div className="mt-6 text-center">
        <p className="text-sm text-tertiary">
          © {new Date().getFullYear()} Jan Shikshan Sansthan, Bikaner. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
