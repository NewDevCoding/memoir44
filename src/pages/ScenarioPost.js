import React from 'react'
import { useParams } from 'react-router-dom'
import { pdfs } from './pdfDict'
import PDFViewer from './PDFViewer'

const ScenarioPost = () => {
    const { id } = useParams()
  
    const post = pdfs.filter(pdf => pdf.id === parseInt(id))
  
    const pdfDisplay = post[0].pdf;
    
    
    
  return (
    <>
    {
        <PDFViewer testPDF={pdfDisplay} />
    }
    </>
  )
}

export default ScenarioPost