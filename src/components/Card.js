import { useState } from 'react';

const Card = () => {
  const [showNames, setShowNames] = useState(false);

  const names = [
    { name: "श्री ओम प्रकाश सुथार", position: "प्रभारी निदेशक", icon: "👨‍💼" },
    { name: "श्री महेश उपाध्याय", position: "कार्यक्रम अधिकारी", icon: "📋" },
    { name: "श्री लक्ष्मीनारायण चुरा", position: "लेखाकार", icon: "💰" },
    { name: "श्री तलत रियाज", position: "सहायक कार्यक्रम अधिकारी", icon: "📊" },
    { name: "श्री उमाशंकर आचार्य", position: "सहायक कार्यक्रम अधिकारी", icon: "📊" },
    { name: "श्री विष्णुदत्त मारू", position: "चालक", icon: "🚗" },
    { name: "श्री श्रीमोहन आचार्य", position: "सहायक", icon: "🤝" }
  ];

  const handleClick = () => {
    setShowNames(!showNames);
  };

  return (
    <div className="max-w-2xl bg-surface border-0 rounded-2xl shadow-2xl p-8 m-10 mx-auto transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-60"></div>
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-light to-transparent rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary to-transparent rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full mb-4 shadow-lg">
            <span className="text-2xl">👥</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            जे एस एस कर्मचारी
          </h2>
          <p className="text-tertiary mt-2 text-sm">हमारे समर्पित पेशेवरों से मिलें</p>
        </div>

        {showNames && (
          <div className="mb-8 space-y-4 animate-fadeIn">
            {names.map((staff, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-surface/80 backdrop-blur-sm rounded-xl border border-muted hover:border-primary-light transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-background to-primary-light rounded-full flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-xl">{staff.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-tertiary text-lg leading-tight">
                    {staff.name}
                  </h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wide">
                    {staff.position}
                  </p>
                </div>
                <div className="text-primary opacity-60">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={handleClick}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-surface font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span className="mr-2">{showNames ? 'कम दिखाएं' : 'हमारी टीम'}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${showNames ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
