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
    "Name of Main-Course",
    "Sub Course",
    "Duration (In days)",
    "No of Sessions per Batch",
    "No of Batches",
    "No of Beneficiaries per Batch",
    "Total No. of Beneficiaries",
    "Honorarium per Session (INR)",
    "Honorarium per Batch (INR)",
    "Total Honorarium (INR)",
    "Cost of TLM per Batch (INR)",
    "Total TLM Cost (INR)",
    "Cost of Training per Batch (INR)",
    "Total Cost of the Program (INR)",
    "Cost per Trainee (INR)"
  ];

  const tableData = [
    ["1", "Automotive Sector", "Welding Assistant", "90", "80", "2", "20", "40", "200", "16000", "32000", "2000", "4000", "18000", "36000", "900"],
    ["2", "Beauty & Wellness Sector", "Assistant Beauty Therapist", "150", "125", "14", "20", "280", "190", "23750", "332500", "4200", "58800", "27950", "391300", "1397.5"],
    ["3", "Beauty & Wellness Sector", "Assistant Nail Technician", "120", "100", "15", "20", "300", "180", "18000", "270000", "4000", "60000", "22000", "330000", "1100"],
    ["4", "Apparel, Made-Ups & Home Furnishing Sector", "Self Employed Tailor", "210", "170", "25", "20", "500", "190", "32300", "807500", "4500", "112500", "36800", "920000", "1840"],
    ["5", "Food Processing Sector", "Traditional Snack and Savoury Maker", "150", "120", "5", "20", "100", "180", "21600", "108000", "2400", "12000", "24000", "120000", "1200"],
    ["6", "Electronics & Hardware Sector", "Service Technician-Home Appliances", "105", "86", "4", "20", "80", "200", "17200", "68800", "2400", "9600", "19600", "78400", "980"],
    ["7", "Electronics & Hardware Sector", "Field Technician - AC", "180", "150", "1", "20", "20", "200", "30000", "30000", "3000", "3000", "33000", "33000", "1650"],
    ["8", "IT-ITES Sector", "Domestic Data Entry Operator", "240", "200", "1", "20", "20", "180", "36000", "36000", "3000", "3000", "39000", "39000", "1950"],
    ["9", "Plumbing Sector", "Plumber (General) Helper", "120", "100", "2", "20", "40", "200", "20000", "40000", "2000", "4000", "22000", "44000", "1100"],
    ["10", "Handicrafts & Carpets Sector", "Traditional Hand Embroiderer", "75", "55", "15", "20", "300", "180", "9900", "148500", "2200", "33000", "12100", "181500", "605"],
    ["11", "Handicrafts & Carpets Sector", "Handmade Bamboo Agarbatti Stick Making", "75", "60", "6", "20", "120", "180", "10800", "64800", "2000", "12000", "12800", "76800", "640"],
    ["Total", "", "", "", "", "90", "", "1800", "", "", "1938100", "", "311900", "", "2250000", "13362.5"],
    ["", "", "", "", "", "", { text: "Budget for Skill Training Program", colSpan: 8 }, "2250000", ""],
    ["", "", "", "", "", "", { text: "Budget for Activity & Capacity Building program with RP and JSS Staff", colSpan: 8 }, "500000", ""],
    ["", "", "", "", "", "", { text: "Budget for Equipment Rep. Maintinance and Purchase", colSpan: 8 }, "100000", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "Total", "", "24000000", ""]
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header} className="font-bold text-tertiary">JAN SHIKSHAN SANSTHAN, BIKANER (RAJ)</h1>
      <h2 style={styles.subHeader} className="text-tertiary">ANNUAL ACTION PLAN 2020-21</h2>

      <div style={styles.tableContainer}>
        <table style={styles.responsiveTable} className="bg-primary-light border-collapse border border-primary">
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
