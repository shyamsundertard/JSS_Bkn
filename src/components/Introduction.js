import React from 'react';

const Introduction = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      {/* Title Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-tertiary">
        जन शिक्षण संस्थान, बीकानेर
      </h1>
      <p className="text-center text-lg md:text-xl text-tertiary mb-4">
        कौशल विकास एवं उद्यमिता मंत्रालय, भारत सरकार द्वारा वित्त पोषित
      </p>

      {/* Main Content */}
      <div className="space-y-6 text-tertiary">
        {/* परिचय Card */}
        <div className="bg-primary-light shadow-lg rounded-lg p-4 border-l-4 border-b-4 border-primary">
          <h2 className="text-xl font-semibold mb-2">परिचय:</h2>
          <p className="mb-4 tracking-wider">
            जन शिक्षण संस्थान, बीकानेर भारत सरकार के कौशल विकास एवं उद्यमिता मंत्रालय के सौजन्य से बीकानेर प्रौढ़ शिक्षण समीती, बीकानेर द्वारा संचालित किया जा रहा है। जन शिक्षण संस्थान, बीकानेर की स्थापना सन् 2000 में हुई। उल्लेखनीय है कि जन शिक्षण संस्थान स्कीम की शुरूआत राष्ट्रीय साक्षरता मिशन, स्कूल शिक्षा एवं साक्षरता विभाग, मानव संसाधन विकास मंत्रालय, भारत सरकार द्वारा श्रमिक विद्यापीठ के नाम से सन् 1965 में वरली, मुम्बई से हुई। सन् 2000 से इसका नाम श्रमिक विद्यापीठ से जन शिक्षण संस्थान कर दिया गया। 
            <br /><br />
            &nbsp; &nbsp; जन शिक्षण संस्थान, बीकानेर द्वारा अब तक संचालित विभिन्न प्रकार के रोजगार- स्वरोजगार परक पाठ्यक्रमों में मार्च, 2024 तक निर्धारित लक्ष्य समूह के 48045 महिला- पुरुषों को विभिन्न कौशल प्रशिक्षणों में प्रशिक्षित किया गया है।
          </p>
        </div>

        {/* मुख्य उद्देश्य Card */}
        <div className="bg-primary-light shadow-lg rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold mb-2">मुख्य उद्देश्य:</h2>
          <p className="mb-4 tracking-wider">
            जिले की शहरी कच्ची बस्तियों एवं ग्रामीण क्षेत्रों के निरक्षर, नवसाक्षर, अल्पशिक्षित, स्कूली ड्रॉप-आउट, सामाजिक आर्थिक दृष्टि से पिछड़े तथा वंचित वर्ग के बेरोजगार महिला-पुरुषों को स्थानीय बाजार की माँग के अनुसार व्यावसायिक कौशल प्रशिक्षणों में दक्ष कर उनको सामाजिक एवं आर्थिक रूप से स्वावलंबी बनाना और जीवन कौशल शिक्षा के माध्यम से व्यक्तित्व विकास, सामाजिक विकास एवं राष्ट्रीय सरोकार की कार्य-गतिविधियों का नियमित संचालन करना।
          </p>
        </div>

        {/* लक्ष्य समूह Card */}
        <div className="bg-primary-light shadow-lg rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold mb-2">लक्ष्य समूह:</h2>
          <p className="mb-4 tracking-wider">
            बीकानेर जिले के निरक्षर, नवसाक्षर, अल्पशिक्षित, स्कूली ड्रॉप आउट तथा सामाजिक एवं आर्थिक रूप से पिछड़े एवं वंचित वर्ग के 15-45 आयुवर्ग के महिला-पुरुष।
          </p>
        </div>

        {/* निःशुल्क प्रशिक्षण Card */}
        <div className="bg-primary-light shadow-lg rounded-lg p-4 border-l-4 border-primary">
          <h2 className="text-xl font-semibold mb-2">निःशुल्क प्रशिक्षण</h2>
          <p className="mb-4 tracking-wider">
            संस्थान द्वारा अनुसूचित जाति एवं अनुसूचित जनजाति (SC/ST) वर्ग, बीपीएल (BPL) एवं दिव्यांग श्रेणी के व्यक्तियों को निःशुल्क प्रशिक्षण दिया जाता है।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
