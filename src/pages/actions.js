import React, {useState} from 'react'
import ActionData from './ActionData'
import Card from './card'
import "./CSSpages/troops.css"
import "./gallery.css"
import { Link } from "react-router-dom"




function Actions() {
    const [tempData, setTempData] = useState(ActionData);
    const inputStyle = {
      padding: 12,
      width: "100%",
      fontSize: "105%",
    };
    const onSearchChange = (value) => {
      const newData = ActionData && ActionData.filter(
        (cust) =>
          cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
          
      );
      setTempData(newData);
    };
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    

    return (
     <>
        <div className='searchbar-comp'>
          <h2>Search For Actions info</h2>
          <input
            type="search"
            placeholder="Type something to search..."
            style={inputStyle}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className='display-container'>
        {tempData && tempData.map((customer, index) => (
          
      
          
          <div onClick={() => setSelectedImage(customer.image2)}>
            <Card userInfo={customer.image} key={index}/>
          </div>
        ))}
        {selectedImage && (
                <div className='overlay' onClick={() => setSelectedImage(null)}>
                  <img src={selectedImage} alt="Selected Image" />
                </div>
          )}
        </div>
        </>
    );
  }



export default Actions