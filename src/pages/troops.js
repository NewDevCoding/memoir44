import React, {useState} from 'react'
import TroopData from "./TroopData"
import Card from './card'
import { Link } from 'react-router-dom'
import "./CSSpages/troops.css"



 




function Troops() {
    const [tempData, setTempData] = useState(TroopData);
    const inputStyle = {
      padding: 12,
      width: "100%",
      fontSize: "105%",
    };
    const onSearchChange = (value) => {
      const newData = TroopData && TroopData.filter(
        (cust) =>
          cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setTempData(newData);
    };
   

    return (
      <>
      
        <div className='searchbar-comp'>
        <h2>Search For Troop Info</h2>
        <input
          type="search"
          placeholder="Type something to search..."
          style={inputStyle}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        </div>
        <div className='display-container'>
          {tempData && tempData.map((customer, index) => (
          <Link to={`/troops/troopcard/${customer.id}`}>
            <Card userInfo={customer.image} key={index}/>
          </Link>
          ))}
        </div>
        
      </>
    );
  }

  


export default Troops