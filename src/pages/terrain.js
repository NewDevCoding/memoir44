import React, {useState} from 'react'
import CustomerData from "./customerData"
import Card from './card'
import "./troops.css"




function Terrain() {
    const [tempData, setTempData] = useState(CustomerData);
    const inputStyle = {
      padding: 12,
      width: "100%",
      fontSize: "105%",
    };
    const onSearchChange = (value) => {
      const newData = CustomerData && CustomerData.filter(
        (cust) =>
          cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          cust.order.includes(value)
      );
      setTempData(newData);
    };
    return (
      <div className="container">
        <h2>Search For Terrain Info</h2>
        <input
          type="search"
          placeholder="Type something to search..."
          style={inputStyle}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className='display-container'>
        {tempData && tempData.map((customer, index) => (
          <Card userInfo={customer} key={index} />
        ))}
        </div>
      </div>
    );
  }



export default Terrain