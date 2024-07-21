import React, {useState} from 'react'
import TerrainData from './TerrainData'
import Card from './card'
import "./CSSpages/troops.css"
import { Link } from "react-router-dom"




function Terrain() {
    const [tempData, setTempData] = useState(TerrainData);
    const inputStyle = {
      padding: 12,
      width: "100%",
      fontSize: "105%",
    };
    const onSearchChange = (value) => {
      const newData = TerrainData && TerrainData.filter(
        (cust) =>
          cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
          
      );
      setTempData(newData);
      console.log(tempData)
    };
    
    // tempData.map(user => console.log(user.id))
    return (
     <>
        <div className='searchbar-comp'>
          <h2>Search For Terrain Info</h2>
          <input
            type="search"
            placeholder="Type something to search..."
            style={inputStyle}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className='display-container'>
        {tempData && tempData.map((customer, index) => (
          
          <Link to={`/terrain/terraincard/${customer.id}`}>
            <Card userInfo={customer.image} key={index}/>
          </Link>
        ))}
        </div>
        </>
    );
  }



export default Terrain