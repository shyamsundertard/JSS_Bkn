const AnnualPlan = () => {
  const isMobile = window.innerWidth <= 600;
  
  const styles = {
    container: {
      padding: '1rem',
      maxWidth: '100%',
      margin: '0 auto',
      overflow: 'hidden'
    },
    header: {
      textAlign: 'center',
      marginBottom: '1rem',
      fontSize: isMobile ? '1.25rem' : '1.5rem'
    },
    subHeader: {
      textAlign: 'center',
      marginBottom: '1rem',
      fontSize: isMobile ? '1rem' : '1.25rem'
    },
    tableContainer: {
      overflowX: 'auto'
    },
    responsiveTable: {
      borderCollapse: 'collapse',
      width: '100%',
      fontSize: isMobile ? '0.6rem' : '0.75rem'
    },
    tableCell: {
      padding: isMobile ? '0.3rem' : '0.5rem',
      textAlign: 'left',
      wordWrap: 'break-word',
      fontSize: isMobile ? '0.6rem' : '0.75rem'
    },
    tableHeader: {
      padding: isMobile ? '0.3rem' : '0.5rem',
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: isMobile ? '0.6rem' : '0.75rem'
    }
  };

  const TableCell = ({ children, colSpan }) => (
    <td 
      style={styles.tableCell} 
      className="border border-primary"
      colSpan={colSpan}
    >
      {children}
    </td>
  );

  const TableHeader = ({ children }) => (
    <th style={styles.tableHeader} className="border border-primary">
      {children}
    </th>
  );

  const headerData = [
    "S.No.",
    "Name of Main-Course/Sector",
    "Sub Course",
    "Duration (in days)",
    "No of Session per batch",
    "No of Batches",
    "No of Beneficiaries per batch",
    "Total no. of Beneficiaries",
    "Honorarium per session (INR)",
    "Honorarium per batch (INR)",
    "Total Honorarium (INR)",
    "Cost of TLM per batch (INR)",
    "Total TLM Cost (INR)",
    "Cost of Training per batch (INR)",
    "Total Cost of the Program (INR)",
    "Cost per Trainee (INR)"
];

const tableData = [
    ["1", "Handcraft & Carpets", "Assistant Hand Embroidery", "240", "80", "6", "20", "120", "300", "24000", "144000", "5000", "30000", "29000", "174000", "1450"],
    ["2", "Apparel, Made ups & Home Furnishing", "Assistant Dress Maker", "240", "80", "12", "20", "240", "300", "24000", "288000", "6000", "72000", "30000", "360000", "1500"],
    ["3", "Apparel, Made ups & Home Furnishing", "Darzi", "120", "40", "11", "20", "220", "300", "12000", "132000", "3000", "33000", "15000", "165000", "750"],
    ["4", "Beauty & Wellness", "Beauty Care Assistant", "240", "80", "12", "20", "240", "300", "24000", "288000", "5500", "66000", "29500", "354000", "1475"],
    ["5", "Beauty & Wellness", "Assistant Hair Dresser Saloon Services (Advances)", "120", "40", "12", "20", "240", "300", "12000", "144000", "3000", "36000", "15000", "180000", "750"],
    ["6", "Environmental Science", "Solar PV Installation Helper", "270", "90", "1", "20", "20", "400", "36000", "36000", "3500", "3500", "39500", "39500", "1975"],
    ["7", "Handcrafts", "Assistant Jute Craft Product Maker", "240", "80", "2", "20", "40", "300", "24000", "48000", "3400", "6800", "27400", "54800", "1370"],
    ["8", "Electronics & Hardware", "Helper Electrical Technician", "240", "80", "2", "20", "40", "300", "24000", "48000", "3500", "7000", "27500", "55000", "1375"],
    ["9", "Tourism and Hospitality", "Laghu Udhaymi (Fast Food staff)", "90", "30", "3", "20", "60", "300", "9000", "27000", "3000", "9000", "12000", "36000", "600"],
    ["10", "Food Processing", "Basic of Papar, Pickles and Masala Powder", "150", "50", "7", "20", "140", "300", "15000", "105000", "4000", "28000", "19000", "133000", "950"],
    ["11", "IT-ITES", "Data Analysis Assistant", "300", "100", "6", "20", "120", "320", "32000", "192000", "4300", "25800", "36300", "217800", "1815"],
    ["12", "Textile & Handlooms", "Assistant Textile Printer", "240", "80", "2", "20", "40", "300", "24000", "48000", "3400", "6800", "27400", "54800", "1370"],
    ["13", "Furniture and Fittings", "Carpenter Advance", "120", "40", "1", "20", "20", "380", "15200", "15200", "3500", "3500", "18700", "18700", "935"],
    ["14", "Handcraft & Carpets", "Advanced Potter (Kumhar) including Traditional Ceramic and Teracotta Product Maker", "120", "40", "2", "20", "40", "320", "12800", "25600", "4500", "9000", "17300", "34600", "865"],
    ["15", "Handcrafts & Carpets", "Creative Malabar", "120", "40", "4", "20", "80", "300", "12000", "48000", "3000", "12000", "15000", "60000", "750"],
    ["16", "Handcraft & Carpets", "Creative Soft Toy Maker Advance", "120", "40", "4", "20", "80", "300", "12000", "48000", "3500", "14000", "15500", "62000", "775"],
    ["17", "Capital Goods & Manufacturing", "Assistant Welder & Fabricator", "240", "80", "2", "20", "40", "380", "30400", "60800", "3200", "6400", "33600", "67200", "1680"],
    ["18", "Automotive", "Helper Two/Three Wheelers", "240", "80", "1", "20", "20", "380", "30400", "30400", "3200", "3200", "33600", "33600", "1680"],
    ["Total", "", "", "", "", "90", "", "1800", "", "", "1728000", "", "378800", "", "2100000", ""],
    ["", "", "", "", "", "", { text: "Budget for Skill Training Program", colSpan: 8 }, "2100000", ""],
    ["", "", "", "", "", "", { text: "Budget for Capacity Building program with RP and JSS Staff", colSpan: 8 }, "72000 (3%)", ""],
    ["", "", "", "", "", "", { text: "Budget for Action", colSpan: 8 }, "72000 (3%)", ""],
    ["", "", "", "", "", "", { text: "Budget for Equipment Rep. Maintenance", colSpan: 8 }, "6000", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "Grand Total", "", "2250000", ""]
];

  return (
    <div style={styles.container}>
      <h1 style={styles.header} className="font-bold text-tertiary">JAN SHIKSHAN SANSTHAN, BIKANER (RAJ)</h1>
      <h2 style={styles.subHeader} className="text-tertiary">ANNUAL ACTION PLAN 2020-21</h2>

      <div style={styles.tableContainer}>
        <table style={styles.responsiveTable} className="bg-primary-light border-collapse border border-primary rounded-sm">
          <thead>
            <tr className="bg-primary-dark text-background">
              {headerData.map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => {
                  if (typeof cell === 'object' && cell.text && cell.colSpan) {
                    return (
                      <TableCell key={cellIndex} colSpan={cell.colSpan}>
                        {cell.text}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

      <div className="flex-grow md:mx-32 md:my-10 m-5">
      <h2 className="text-2xl font-semibold text-center mb-6">
        संस्थान द्वारा संचालित व्यावसायिक कौशल प्रशिक्षण
      </h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-sm">
        <table className="table-auto border border-primary bg-primary-light w-full text-sm md:text-base">
          <thead className="bg-primary-dark text-background">
            <tr>
              <th className="border border-primary px-2 py-2">क्र. सं.</th>
              <th className="border border-primary px-2 py-2">प्रशिक्षण का नाम</th>
              <th className="border border-primary px-2 py-2">अवधि दिन/सत्र</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["असिस्टेंट हैंड एम्ब्रॉयडर – हाथ की कढ़ाई", "105/80"],
              ["असिस्टेंट ड्रैस मेकर – सिलाई", "105/80"],
              ["ब्यूटी केयर असिस्टेंट – ब्यूटीशियन प्रशिक्षण", "105/80"],
              ["असिस्टेंट वेल्डर एंड फेब्रीकेटर – वेल्डिंग कार्य प्रशिक्षण", "105/80"],
              ["हेल्पर – इलेक्ट्रिकल टेक्नीशियन – इलेक्ट्रिक कार्य प्रशिक्षण", "105/80"],
              ["असिस्टेंट फूड एंड बेवरेज प्रोसेसिंग एंड प्रिजर्वेशन – कुकिंग प्रशिक्षण", "75/60"],
              ["टेलर मैन प्रशिक्षण", "55/45"],
              ["असिस्टेंट जूट कैम्पर – जूट कार्य प्रशिक्षण", "105/80"],
              ["असिस्टेंट कम्प्यूटर ऑपरेटर – कम्प्यूटर प्रशिक्षण", "150/120"],
              ["असिस्टेंट टेक्सटाइल प्रिंटर – टाई एंड डाई, स्क्रीन, ब्लॉक प्रिंटिंग", "105/80"],
              ["असिस्टेंट फर्नीचर एस्टेब्लिशर – जूटी निर्माण प्रशिक्षण", "115/90"],
              ["हेल्पर दु/श्री खादी", "105/87"],
            ].map(([name, duration], i) => (
              <tr key={i}>
                <td className="border border-primary px-2 py-1 text-center font-semibold">{i + 1}.</td>
                <td className="border border-primary px-2 py-1 font-semibold">{name}</td>
                <td className="border border-primary px-2 py-1 text-center">{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section: प्रक्रियाएं और आवश्यक कार्य */}
      <div className="mt-10 border-l-4 border-b-4 border-primary bg-primary-light rounded-lg p-2">
        <h3 className="text-lg font-semibold mb-4 text-center">
          - कौशल प्रशिक्षण केन्द्र संचालन के लिए प्रक्रियाएं और केन्द्र संचालन संबंधी आवश्यक कार्य -
        </h3>
        <ul className="list-disc list-inside space-y-2 text-justify">
          <li>
            स्किल पोर्टल एंव (Skill India Digital Hub) के माध्यम से इच्छुक प्रशिक्षणार्थियों का पंजीकरण।
          </li>
          <li>संपर्क व्यक्ति (अनुदेशक) की पहचान।</li>
          <li>लक्ष्य समूह के अनुसार प्रशिक्षण प्राप्त के इच्छुक 20 संभावियों का सर्वे।</li>
          <li>कौशल प्रशिक्षण हेतु स्थान का चयन।</li>
          <li>संपर्क व्यक्ति एवं संभावियों के साथ प्रारंभिक बैठक।</li>
          <li>केंद्र संचालन हेतु निर्धारित प्रारंभ शुल्क जमा करवाना।</li>
          <li>निश्चित समय एवं तिथि से केंद्र का प्रारंभ करना।</li>
          <li>केंद्र का पर्यवेक्षण, कार्यक्रमों की समीक्षा एवं नियोजन।</li>
          <li>प्रशिक्षणार्थियों का कार्यक्रमों का मूल्यांकन।</li>
          <li>स्वयं सहायता समूह का गठन।</li>
          <li>प्रमाण-पत्र वितरण एवं अनुश्रवण कार्य।</li>
          <li>
            प्रशिक्षण स्थापना के लिए विभिन्न ऋण योजनाओं की जानकारी देकर सफलता की कहानियों के रूप में
            प्रशिक्षणार्थियों का स्वरोजगार/रोजगार से जुड़कर आत्मनिर्भर बनाना।
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AnnualPlan;
