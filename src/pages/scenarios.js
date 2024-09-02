import React, {useState} from 'react'
import PDFViewer from './PDFViewer'
import testPDF from './Saving_Private_Ryan.pdf'
import {pdfs} from './pdfDict'
import './CSSpages/scenarios.css'
import Card from './card'
import { Link } from 'react-router-dom'
import DropdownFilter from './DropdownFilter';


const Scenarios = () => {

  const inputStyle = {
    width: "300px",
    fontSize: "105%",
    padding: "12px",
    
  };

  const [filter, setFilter] = useState('all');
  const [tempData, setTempData] = useState(pdfs)

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const onSearchChange = (value) => {
    const newData = pdfs && pdfs.filter(
      (cust) =>
        cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setTempData(newData);
    console.log(tempData)
  };

  const allTrue = filter === 'all';

  const options = [
    { value: 'Base Game', label: 'Base Game' },
    { value: 'Eastern Front', label: 'Eastern Front' },
    { value: 'Mediterranean Theater', label: 'Mediterranean Theater' },
    { value: 'New Flight Plan', label: 'New Flight Plan' },
    { value: 'Pacific Theater', label: 'Pacific Theater' },
    { value: 'Terrain Pack', label: 'Terrain Pack' },
    
  ];
   
  return (
    <>
    <div className='parent'>


      <div className='dropdown'>
        <h1>Filter Scenarios</h1>
          <DropdownFilter options={options} onFilterChange={handleFilterChange} />
          {/* Render your filtered data here */}
      </div>

        <div className='searchbar'>
          <div>
          
          <input
            type="search"
            placeholder="Search for a scenario..."
            style={inputStyle}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          </div>
        </div>

      

      

    </div>

    <div className='display-box'>
      {
        allTrue ? (
          pdfs.map((pdf, index) => (
            <Link to={`/scenarios/scenario/${pdf.id}`}>
              <Card userInfo={pdf.image} key={index}/>
            </Link>
          ))
        ) : (
       pdfs.filter(pdf => pdf.filter === filter).map((pdf, index) => (
        <Link to={`/scenarios/scenario/${pdf.id}`}>
          <Card userInfo={pdf.image} key={index}/>
        </Link>
      )))
      }    
    
    </div>
    </>
  )
}


{/* <div className='searchbar-comp'>
          <div>
          <h2>Search For Scenarios</h2>
          <input
            type="search"
            placeholder="Type something to search..."
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

      </div> */}



export default Scenarios  


