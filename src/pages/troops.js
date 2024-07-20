import React, {useState} from 'react'
// import CustomerData from "./customerData"
import Card from './card'
import { Link } from 'react-router-dom'
import "./CSSpages/troops.css"

const CustomerData = [{
  id: 1,
  name: 'Mobile Artillery',
  image: require("./troop_images/mobile_artillery.PNG"),
},{
  id: 2,
  name: 'Armoured Trains',
  image: require("./troop_images/armoured_trains.PNG"),
},{
  id: 3,
  name: 'Big Guns',
  image: require("./troop_images/big_guns.PNG"),
},{
  id: 4,
  name: 'Brandenburgers',
  image: require("./troop_images/branded_burgers.PNG"),
},{
  id: 5,
  name: 'Combat Engineers',
  image: require("./troop_images/combat_engineers.PNG"),
},{
  id: 6,
  name: 'Command Cars',
  image: require("./troop_images/command_Cars.PNG"),
},{
  id: 7,
  name: 'Depleted Units',
  image: require("./troop_images/depleted_units.PNG"),
},{
  id: 8,
  name: 'Destroyers',
  image: require("./troop_images/destroyers.PNG"),
},{
  id: 9,
  name: 'Half Tracks',
  image: require("./troop_images/half_tracks.PNG"),
},{
  id: 10,
  name: 'Heavy Anti-Tank',
  image: require("./troop_images/heavy_at.PNG"),
},{
  id: 11,
  name: 'Hobarts Funnies',
  image: require("./troop_images/hobarts.PNG"),
},{
  id: 12,
  name: 'Screeming Meemies',
  image: require("./troop_images/screeming_meemies.PNG"),
},{
  id: 13,
  name: 'Ski Troops',
  image: require("./troop_images/ski_troops.PNG"),
},{
  id: 14,
  name: 'Snipers',
  image: require("./troop_images/snipers.PNG"),
},{
  id: 15,
  name: 'Supply Trains',
  image: require("./troop_images/supply_train.PNG"),
},{
  id: 16,
  name: 'Supply Trucks',
  image: require("./troop_images/supply_trucks.PNG"),
},{
  id: 17,
  name: 'Tank Destroyers',
  image: require("./troop_images/tank_destroyers.PNG"),
},{
  id: 18,
  name: 'Tigers',
  image: require("./troop_images/tigers.PNG"),
}]

 




function Troops() {
    const [tempData, setTempData] = useState(CustomerData);
    const inputStyle = {
      padding: 12,
      width: "100%",
      fontSize: "105%",
    };
    const onSearchChange = (value) => {
      const newData = CustomerData && CustomerData.filter(
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