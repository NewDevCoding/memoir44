import "./gallery.css"
import React, {useState} from 'react'

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (image) => {
       setSelectedImage(image);
     };
  
      return (
        <div className="gallery-container">
          
          <img src={require("./troop_images/anti_tank.PNG")} alt="Image 1" onClick={() => handleImageClick(require("./troop_images/anti_tank.PNG"))} />
          <img src={require("./troop_images/anti_tank.PNG")} alt="Image 2" onClick={() => handleImageClick(require("./troop_images/anti_tank.PNG"))} />
          
          {selectedImage && (
            <div className="overlay" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="Selected Image" className="selected-image" />
            </div>
          )}
        </div>
      );
   };
