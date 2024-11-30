import React, {useState} from 'react'
import {pdfs} from './pdfDict'
import './CSSpages/scenarios.css'
import Card from './card'
import { Link } from 'react-router-dom'
import DropdownFilter from './DropdownFilter';
import randomScenario from './randomScenario'


const Scenarios = () => {

  const inputStyle = {
    width: "300px",
    fontSize: "105%",
    padding: "12px",
    
  };

  const [filter, setFilter] = useState('all');
  const [tempData, setTempData] = useState(pdfs)
  const [random, setRandom] = useState('');


  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setRandom('')

  };

  const onSearchChange = (value) => {
    const newData = pdfs && pdfs.filter(
      (cust) =>
        cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setTempData(newData);
    setRandom('')
  };

  const randomItem = () => {
    const random = Math.floor(Math.random() * pdfs.length)
    const randomData = pdfs.filter(item => item.id === random)
    setRandom(randomData)
  }

  const allTrue = filter === 'all';

  const options = [
    { value: 'Base Game', label: 'Base Game' },
    { value: 'Eastern Front', label: 'Eastern Front' },
    { value: 'Mediterranean Theater', label: 'Mediterranean Theater' },
    { value: 'New Flight Plan', label: 'New Flight Plan' },
    { value: 'Pacific Theater', label: 'Pacific Theater' },
    { value: 'Terrain Pack', label: 'Terrain Pack' },
    { value: 'Equipment Pack', label: 'Equipment Pack' },
    
  ];
   
  return (
    <>
    <div className='parent'>


      <div className='dropdown'>
        <h1>Filter Scenarios</h1>
          <DropdownFilter options={options} onFilterChange={handleFilterChange} />
          
      </div>

      <div className='random'>
        <button onClick={randomItem}>Pick a random Scenario</button>
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
        random !== '' ? (
          random.map((pdf, index) => (
            <Link to={`/scenarios/scenario/${pdf.id}`}>
              <Card userInfo={pdf.image} key={index}/>
            </Link>
          ))
        ) :
        allTrue ? (
          tempData.map((pdf, index) => (
            <Link to={`/scenarios/scenario/${pdf.id}`}>
              <Card userInfo={pdf.image} key={index}/>
            </Link>
          ))
        ) : (
       tempData.filter(pdf => pdf.filter === filter).map((pdf, index) => (
        <Link to={`/scenarios/scenario/${pdf.id}`}>
          <Card userInfo={pdf.image} key={index}/>
        </Link>
      )))
      }    
    
    </div>
    </>
  )
}



export default Scenarios  


