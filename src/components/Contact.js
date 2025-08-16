import { useState, useRef } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const maxLength = 10000;

  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setMessage(value);
    }
  };

  const showTooltip = (tooltipId) => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    showTimeoutRef.current = setTimeout(() => {
      setActiveTooltip(tooltipId);
      
      hideTimeoutRef.current = setTimeout(() => {
        setActiveTooltip(null);
      }, 3000);
    }, 1000);
  };

  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    setActiveTooltip(null);
  };

  const CustomTooltip = ({ id, content, children }) => (
    <div className="relative inline-block w-full">
      <div
        onMouseEnter={() => showTooltip(id)}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      {activeTooltip === id && (
        <div className="absolute bottom-full left-1/2 mb-2 z-50 animate-fadeIn" style={{ transform: 'translate(-50%, 0)' }}>
          <div className="bg-tertiary text-surface text-sm rounded-lg px-3 py-2 shadow-lg border border-primary max-w-xs whitespace-normal">
            {content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-tertiary"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes tooltipFadeIn {
            from {
              opacity: 0;
              transform: translate(-50%, -10px);
              visibility: hidden;
            }
            to {
              opacity: 1;
              transform: translate(-50%, 0);
              visibility: visible;
            }
          }
          .animate-fadeIn {
            animation: tooltipFadeIn 0.3s ease-out forwards;
            transform: translate(-50%, 0);
            opacity: 0;
            visibility: hidden;
          }
          input[title], textarea[title], *[title] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
          input::-webkit-tooltip, textarea::-webkit-tooltip {
            display: none;
          }
        `}
      </style>
      <div className="p-5">
        <div className="overflow-x-auto rounded-sm max-w-[80%] mx-auto">
        <div className="text-center mb-10">
          <h1 className="mb-2.5 text-3xl font-bold text-tertiary">हमसे संपर्क करें</h1>
          <p className="text-base text-tertiary max-w-4xl mx-auto">
            हमारी तकनीकी सहायता टीम हमेशा मदद के लिए तैयार है। जन शिक्षण संस्थान के लिए प्रत्येक ग्राहक एक मूल्यवान संपत्ति है। हम आपकी निजता का सम्मान करते हैं और बिक्री, सहायता और हमारे उत्पादों से संबंधित सामान्य प्रश्नों से जुड़ी आपकी सभी कठिनाइयों या संदेहों को हल करने के लिए यहाँ हैं।
          </p>
        </div>

          <table className="table-auto border border-primary bg-primary-light w-full text-sm md:text-base">
            <thead className="bg-primary-dark text-background">
              <tr>
                <th className="border border-primary px-2 py-2">क्र.</th>
                <th className="border border-primary px-2 py-2">नाम</th>
                <th className="border border-primary px-2 py-2">पद</th>
                <th className="border border-primary px-2 py-2">संपर्क नं.</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["श्री ओम प्रकाश सुथार", "निदेशक", "9660286578"],
                ["श्री महेश उपाध्याय", "कार्यक्रम अधिकारी", "9829048316"],
                ["श्री लक्ष्मी नारायण चूरा", "लेखाकार", "9929182526"],
                ["श्री तलत रियाज", "सहायक कार्यक्रम अधिकारी", "9214083468"],
                ["श्री उमाशंकर आचार्य", "सहायक कार्यक्रम अधिकारी", "9413481466"],
                ["श्री विष्णु दत्त मारू", "वाहन चालक", "9799961613"],
                ["श्री श्रीमोहन आचार्य", "सहायक", "7737128804"],
              ].map(([name, position, contact], i) => (
                <tr key={i}>
                  <td className="border border-primary px-2 py-1 text-center font-semibold">{i + 1}</td>
                  <td className="border border-primary px-2 py-1 font-semibold">{name}</td>
                  <td className="border border-primary px-2 py-1 text-center">{position}</td>
                  <td className="border border-primary px-2 py-1 text-center">{contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-5 justify-center md:flex-row flex-col items-center pt-8">
          <div className="bg-primary-light border-2 border-tertiary rounded-lg shadow-lg p-5 w-full max-w-2xl">
            <h2 className="mb-5 text-2xl font-semibold text-tertiary-dark text-center">संपर्क फॉर्म</h2>
            <form className="flex flex-col gap-4">
              <label htmlFor="name" className="font-medium text-tertiary">नाम *</label>
              <CustomTooltip 
                id="name" 
                content="कृपया अपना पूरा नाम यहाँ दर्ज करें"
              >
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="p-2.5 border border-tertiary bg-background rounded focus:outline-none focus:ring-1 focus:ring-tertiary w-full"
                  placeholder='अपना नाम लिखें...'
                  title=""
                  data-tooltip-disabled="true"
                />
              </CustomTooltip>

              <label htmlFor="email" className="font-medium text-tertiary">ईमेल *</label>
              <CustomTooltip 
                id="email" 
                content="एक वैध ईमेल पता दर्ज करें (उदाहरण: user@example.com)"
              >
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="p-2.5 border border-tertiary bg-background rounded focus:outline-none focus:ring-1 focus:ring-tertiary w-full"
                  placeholder='अपना ईमेल लिखें...'
                  title=""
                  data-tooltip-disabled="true"
                />
              </CustomTooltip>

              <label htmlFor="mobile" className="font-medium text-tertiary">मोबाइल *</label>
              <CustomTooltip 
                id="mobile" 
                content="10 अंकों का मोबाइल नंबर दर्ज करें (उदाहरण: 9876543210)"
              >
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  required 
                  className="p-2.5 border border-tertiary bg-background rounded focus:outline-none focus:ring-1 focus:ring-tertiary w-full"
                  placeholder='अपना मोबाइल नंबर लिखें...'
                  title=""
                  data-tooltip-disabled="true"
                />
              </CustomTooltip>

              <label htmlFor="message" className="font-medium text-tertiary">आपका संदेश *</label>
              <CustomTooltip 
                id="message" 
                content={`अपना विस्तृत संदेश यहाँ लिखें (अधिकतम ${maxLength} अक्षर)`}
              >
                <div className="relative">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    value={message}
                    onChange={handleMessageChange}
                    maxLength={maxLength}
                    className="p-2.5 border border-tertiary bg-background rounded focus:outline-none focus:ring-1 focus:ring-tertiary w-full min-h-[100px] max-h-[200px] resize-y overflow-y-auto"
                    placeholder="अपना संदेश लिखें..."
                    title=""
                    data-tooltip-disabled="true"
                    style={{ fieldSizing: 'content' }}
                  ></textarea>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {message.length}/{maxLength} अक्षर
                  </div>
                </div>
              </CustomTooltip>

              <button 
                type="submit" 
                className="p-2.5 border-none rounded bg-primary text-tertiary text-base cursor-pointer hover:text-lg hover:p-2 transition-colors duration-300 font-extrabold"
              >
                संदेश भेजें
              </button>
            </form>
          </div>

          <div className="bg-primary-light border-2 border-tertiary rounded-lg shadow-lg p-5 w-full max-w-2xl">
            <h2 className="mb-5 text-2xl font-semibold text-tertiary text-center">संपर्क जानकारी</h2>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840291.7327990606!2d73.07137180962703!3d28.02250096973033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d61c628d1a55f%3A0x1d024549baf3e0d6!2sBikaner%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1634192648952!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              title="Google Map"
              className="w-full h-72 border-0 rounded-lg"
            ></iframe>
            <div className="mt-5">
              <p className="my-1.5">
                <strong className="block font-bold text-tertiary">Jan Shikshan Sansthan, Bikaner</strong>
              </p>
              <p className="my-1.5 text-gray-700">
                <strong className="font-bold text-tertiary">फोन:</strong> +91 151 2970778
              </p>
              <p className="my-1.5 text-gray-700">
                <strong className="font-bold text-tertiary">ईमेल:</strong> jssbikaner@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
