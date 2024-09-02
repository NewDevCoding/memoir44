import React, {useState} from 'react'
import PDFViewer from './PDFViewer'
import testPDF from './Saving_Private_Ryan.pdf'
import {pdfs} from './pdfDict'
import './CSSpages/scenarios.css'
import Card from './card'
import { Link } from 'react-router-dom'
import DropdownFilter from './DropdownFilter';


const Scenarios = () => {


  const [filter, setFilter] = useState('all');

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    // Apply your filtering logic here
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
    <div className='dropdown'>
      <h1>Scenarios</h1>
      <DropdownFilter options={options} onFilterChange={handleFilterChange} />
      {/* Render your filtered data here */}
    </div>

    <div className='display-container'>
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



 //<div className='display-container'>
   //    <PDFViewer testPDF={testPDF} />
     // {pdfs.map((pdf, index) => (
       //   <Link to={`/scenarios/scenario/${pdf.id}`}>
         //   <Card userInfo={pdf.image} key={index}/>
          //</Link>
        //))}
    //</div> 

export default Scenarios  


