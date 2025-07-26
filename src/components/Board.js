import React from 'react';

const Board = () => {
  return (
    <div className="flex-grow md:mx-32 md:my-10 m-5">
      <h2 className="text-2xl font-semibold text-center mb-8  text-tertiary">
        भारत सरकार के कौशल विकास एवं उद्यमिता मंत्रालय द्वारा तीन वर्ष के लिए गठित प्रबंध मंडल
        <br />
        (BOARD OF MANAGEMENT) - अवधि: 25.10.2023 - 24.10.2026
      </h2>

      <h3 className="text-xl font-semibold mb-4 text-tertiary">प्रबंध मंडल के गैर कार्यालयी सदस्य (NON OFFICIAL MEMBERS):-</h3>
      <table className="min-w-full border-collapse border border-primary table-fixed bg-primary-light">
        <thead>
          <tr className='bg-primary-dark text-background'>
            <th className="border border-primary text-center">क्र.</th>
            <th className="border border-primary">प्रबंध मंडल के सदस्य महानुभाव</th>
            <th className="border border-primary py-2">पद</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">1</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">एडवोकेट श्री गिरिराज मोहता</span><br />
              <span className="text-sm">राजस्थान हाई कोर्ट-बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">चेयरमैन</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">2</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">डॉ. ब्रजरतन जोशी</span><br />
              <span className="text-sm">सह-आचार्य, राजकीय श्रीडूंगर महाविद्यालय, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">वाईस चेयरमैन</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">3</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">डॉ. दीपाली धवन</span><br />
              <span className="text-sm">डीन, पीजीएस, स्वामी केशवानंद कृषि विश्वविद्यालय, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">4</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमती महिमा सांखला</span><br />
              <span className="text-sm">महिला विकास एवं समाजसेविका, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">5</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्री कमल कल्ला</span><br />
              <span className="text-sm">अध्यक्ष, राजस्थान वूलन इंडस्ट्रीज एसोसिएशन, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">6</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमती मोहिनी देवाणी</span><br />
              <span className="text-sm">प्रख्यात उद्यमी, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">7</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">एडवोकेट भागीरथ राम कालवा</span><br />
              <span className="text-sm">राजस्थान हाई कोर्ट, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
        </tbody>
      </table>



      <h3 className="text-xl font-semibold mb-4 mt-8  text-tertiary">प्रबंध मंडल के कार्यालयी सदस्य (OFFICIAL MEMBER):-</h3>
      <table className="min-w-full border-collapse border border-gray-200 bg-primary-light">
        <thead>
          <tr className='bg-primary-dark text-background'>
            <th className="border border-primary text-center">क्र.</th>
            <th className="border border-primary ">प्रबंध मंडल के सदस्य महानुभाव</th>
            <th className="border border-primary py-2">पद</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">8</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमान क्षेत्रीय निदेशक</span><br />
              <span className="text-sm">क्षेत्रीय निदेशालय, कौशल विकास एवं उद्यमिता, जयपुर, राजस्थान सरकार</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">9</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमान प्राचार्य</span><br />
              <span className="text-sm">राजकीय औद्योगिक प्रशिक्षण संस्थान (आई. टी. आई), बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">10</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमान वरिष्ठ लेखाधिकारी</span><br />
              <span className="text-sm">जिला परिषद, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">11</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमान सुनील कुमार बोड़ा</span><br />
              <span className="text-sm">अतिरिक्त जिला शिक्षा अधिकारी (सा.), बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">12</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्री भवानी प्रकाश</span><br />
              <span className="text-sm">प्राचार्य, आईटीआई</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">13</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्रीमान लीड बैंक अधिकारी</span><br />
              <span className="text-sm">स्टेट बैंक ऑफ इंडिया, पंधिलक पार्क ब्रांच, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">14</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्री अतुल कुमार शर्मा</span><br />
              <span className="text-sm">सहायक निदेशक, जिला उद्योग एवं वाणिज्य केन्द्र, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">15</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">ई. सपस गुर्जर</span><br />
              <span className="text-sm">व्याख्याता, कालिका माध्यमिक विद्यालय, जस्सूरम गेट बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
          <tr>
            <td className="border border-primary p-2 text-center text-tertiary">16</td>
            <td className="border border-primary p-2 text-tertiary">
              <span className="font-semibold">श्री ओम प्रकाश सुधार</span><br />
              <span className="text-sm">निदेशक मन, जिला उद्योग केन्द्र, बीकानेर</span>
            </td>
            <td className="border border-primary p-2 text-center text-tertiary">सदस्य</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
