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
    ["Total", "", "", "", "", "90", "", "1800", "", "372800", "1728000", "", "372000", "", "2100000", ""],
    ["", "", "", "", "", "", { text: "Budget for Skill Training Program", colSpan: 8 }, "2100000", ""],
    ["", "", "", "", "", "", { text: "Budget for Capacity Building program with RP and JSS Staff", colSpan: 8 }, "72000 (3%)", ""],
    ["", "", "", "", "", "", { text: "Budget for Action", colSpan: 8 }, "72000 (3%)", ""],
    ["", "", "", "", "", "", { text: "Budget for Equipment Rep. Maintenance", colSpan: 8 }, "6000", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "Grand Total", "", "2250000", ""]
];

  return (
    <div style={styles.container}>
      <h1 style={styles.header} className="font-bold text-tertiary">JAN SHIKSHAN SANSTHAN, BIKANER (RAJ)</h1>
      <h2 style={styles.subHeader} className="text-tertiary font-semibold">ANNUAL ACTION PLAN 2025-26</h2>

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
    </div>
  );
};

export default AnnualPlan;
