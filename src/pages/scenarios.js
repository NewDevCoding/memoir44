import React from 'react'
import PDFViewer from './PDFViewer'
import testPDF from './Saving_Private_Ryan.pdf'


const Scenarios = () => {
   
  return (
    <div>
      <PDFViewer testPDF={testPDF} />
    </div>
  )
}

export default Scenarios