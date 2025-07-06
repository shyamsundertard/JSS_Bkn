import React from 'react';
import './AnnualPlan.css'; // Import the CSS file for additional styles

const AnnualPlan = () => {
  return (
    <div className="container">
      <h1 className="header  text-red-500">JAN SHIKSHAN SANSTHAN, BIKANER (RAJ)</h1>
      <h2 className="sub-header text-red-500">ANNUAL ACTION PLAN 2020-21</h2>

      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name of Main-Course</th>
              <th>Sub Course</th>
              <th>Duration (In days)</th>
              <th>No of Sessions per Batch</th>
              <th>No of Batches</th>
              <th>No of Beneficiaries per Batch</th>
              <th>Total No. of Beneficiaries</th>
              <th>Honorarium per Session (INR)</th>
              <th>Honorarium per Batch (INR)</th>
              <th>Total Honorarium (INR)</th>
              <th>Cost of TLM per Batch (INR)</th>
              <th>Total TLM Cost (INR)</th>
              <th>Cost of Training per Batch (INR)</th>
              <th>Total Cost of the Program (INR)</th>
              <th>Cost per Trainee (INR)</th>
            </tr>
          </thead>
          <tbody>
            {/* Updated Rows */}
            <tr>
              <td>1</td>
              <td>Automotive Sector</td>
              <td>Welding Assistant</td>
              <td>90</td>
              <td>80</td>
              <td>2</td>
              <td>20</td>
              <td>40</td>
              <td>200</td>
              <td>16000</td>
              <td>32000</td>
              <td>2000</td>
              <td>4000</td>
              <td>18000</td>
              <td>36000</td>
              <td>900</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Beauty & Wellness Sector</td>
              <td>Assistant Beauty Therapist</td>
              <td>150</td>
              <td>125</td>
              <td>14</td>
              <td>20</td>
              <td>280</td>
              <td>190</td>
              <td>23750</td>
              <td>332500</td>
              <td>4200</td>
              <td>58800</td>
              <td>27950</td>
              <td>391300</td>
              <td>1397.5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Beauty & Wellness Sector</td>
              <td>Assistant Nail Technician</td>
              <td>120</td>
              <td>100</td>
              <td>15</td>
              <td>20</td>
              <td>300</td>
              <td>180</td>
              <td>18000</td>
              <td>270000</td>
              <td>4000</td>
              <td>60000</td>
              <td>22000</td>
              <td>330000</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Apparel, Made-Ups & Home Furnishing Sector</td>
              <td>Self Employed Tailor</td>
              <td>210</td>
              <td>170</td>
              <td>25</td>
              <td>20</td>
              <td>500</td>
              <td>190</td>
              <td>32300</td>
              <td>807500</td>
              <td>4500</td>
              <td>112500</td>
              <td>36800</td>
              <td>920000</td>
              <td>1840</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Food Processing Sector</td>
              <td>Traditional Snack and Savoury Maker</td>
              <td>150</td>
              <td>120</td>
              <td>5</td>
              <td>20</td>
              <td>100</td>
              <td>180</td>
              <td>21600</td>
              <td>108000</td>
              <td>2400</td>
              <td>12000</td>
              <td>24000</td>
              <td>120000</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Electronics & Hardware Sector</td>
              <td>Service Technician-Home Appliances</td>
              <td>105</td>
              <td>86</td>
              <td>4</td>
              <td>20</td>
              <td>80</td>
              <td>200</td>
              <td>17200</td>
              <td>68800</td>
              <td>2400</td>
              <td>9600</td>
              <td>19600</td>
              <td>78400</td>
              <td>980</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Electronics & Hardware Sector</td>
              <td>Field Technician - AC</td>
              <td>180</td>
              <td>150</td>
              <td>1</td>
              <td>20</td>
              <td>20</td>
              <td>200</td>
              <td>30000</td>
              <td>30000</td>
              <td>3000</td>
              <td>3000</td>
              <td>33000</td>
              <td>33000</td>
              <td>1650</td>
            </tr>
            <tr>
              <td>8</td>
              <td>IT-ITES Sector</td>
              <td>Domestic Data Entry Operator</td>
              <td>240</td>
              <td>200</td>
              <td>1</td>
              <td>20</td>
              <td>20</td>
              <td>180</td>
              <td>36000</td>
              <td>36000</td>
              <td>3000</td>
              <td>3000</td>
              <td>39000</td>
              <td>39000</td>
              <td>1950</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Plumbing Sector</td>
              <td>Plumber (General) Helper</td>
              <td>120</td>
              <td>100</td>
              <td>2</td>
              <td>20</td>
              <td>40</td>
              <td>200</td>
              <td>20000</td>
              <td>40000</td>
              <td>2000</td>
              <td>4000</td>
              <td>22000</td>
              <td>44000</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Handicrafts & Carpets Sector</td>
              <td>Traditional Hand Embroiderer</td>
              <td>75</td>
              <td>55</td>
              <td>15</td>
              <td>20</td>
              <td>300</td>
              <td>180</td>
              <td>9900</td>
              <td>148500</td>
              <td>2200</td>
              <td>33000</td>
              <td>12100</td>
              <td>181500</td>
              <td>605</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Handicrafts & Carpets Sector</td>
              <td>Handmade Bamboo Agarbatti Stick Making</td>
              <td>75</td>
              <td>60</td>
              <td>6</td>
              <td>20</td>
              <td>120</td>
              <td>180</td>
              <td>10800</td>
              <td>64800</td>
              <td>2000</td>
              <td>12000</td>
              <td>12800</td>
              <td>76800</td>
              <td>640</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>90</td>
              <td></td>
              <td>1800</td>
              <td></td>
              <td></td>
              <td>1938100</td>
              <td></td>
              <td>311900</td>
              <td></td>
              <td>2250000</td>
              <td>13362.5</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={8}>Budget for Skill Training Program	</td>
              <td>2250000</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={8}>Budget for Activity & Capacity Building program with RP and JSS Staff 		</td>
              <td>500000</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={8}>Budget for Equipment Rep. Maintinance and Purchase	</td>
              <td>100000</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td></td>
              <td>24000000</td>
              <td></td>
            </tr>
            {/* Add other rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnualPlan;
