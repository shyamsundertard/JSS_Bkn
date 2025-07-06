import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../images/newlogo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FFA500] to-[#FFCC80] p-8 text-gray-800">
      {/* Top Section */}
      <h2 className="text-lg font-semibold text-center mb-4">अधिक जानकारी के लिए सम्पर्क करें</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        
        {/* Logo Section */}
        <div className="w-full md:w-1/4 mb-4 flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-24 rounded-full shadow-lg transition-transform transform hover:scale-105" />
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col items-center md:items-start mb-4 text-center md:text-left">
          <p className="text-sm mb-2">
            G20<br />
            जन शिक्षण संस्थान, बीकानेर<br />
            प्रौढ़ शिक्षा भवन, सरस्वती पार्क के पास, पुरानी गिन्नाणी, बीकानेर (राजस्थान) 334001<br />
            दूरभाष - 0151-2970778, ई-मेल : 
            <a href="mailto:jssbikaner@gmail.com" className="text-blue-600 underline"> jssbikaner@gmail.com</a><br />
            facebook: Jan Shikshan Sansthan Bikaner / twitter-X: @Bikanerjan/<br />
            instagram: bikanerjss / website: 
            <a href="https://www.jssbikaner.com" className="text-blue-600 underline"> www.jssbikaner.com</a><br />
            मुद्रक : सांखला प्रिंटर्स, बीकानेर
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          
          {/* Address */}
          <div className="flex items-start mb-4 text-center md:text-left">
            <FaMapMarkerAlt className="mr-2 text-xl text-orange-600" />
            <div className='text-md'>
              <p className="font-semibold">निदेशक, जन शिक्षण संस्थान, बीकानेर</p>
              <p>प्रौढ़ शिक्षा भवन,</p>
              <p>सरस्वती पार्क के पास,</p>
              <p>पुरानी गिन्नाणी, बीकानेर (राज.)</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-center mb-4 text-center md:text-left">
            <FaPhoneAlt className="mr-2 text-xl text-orange-600" />
            <p className="text-md">+91 151 2970778</p>
          </div>

          {/* Email */}
          <div className="flex items-center text-center md:text-left">
            <FaEnvelope className="mr-2 text-xl text-orange-600" />
            <p className="text-md">
              <a href="mailto:jssbikaner@gmail.com" className="hover:text-gray-600 transition duration-300 ease-in-out">jssbikaner@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Organization Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
