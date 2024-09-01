import React from 'react'
import PDFViewer from './PDFViewer'
import testPDF from './Saving_Private_Ryan.pdf'
import {pdfs} from './pdfDict'
import './CSSpages/scenarios.css'
import Card from './card'
import { Link } from 'react-router-dom'


const Scenarios = () => {
   
  return (
    <div className='display-container'>
      {/* <PDFViewer testPDF={testPDF} /> */}
      {pdfs.map((pdf, index) => (
          <Link to={`/scenarios/scenario/${pdf.id}`}>
            <Card userInfo={pdf.image} key={index}/>
          </Link>
        ))}
    </div>
  )
}

export default Scenarios