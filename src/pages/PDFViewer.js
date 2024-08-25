import React from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import "./CSSpages/scenarios.css"
// "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"


const PDFViewer = ({testPDF}) => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.mjs",
    import.meta.url
  ).toString();
//   const testPDF = props.testPDF

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className='scenarios'>
        <div>
            <Document file={testPDF}>
                <Page pageNumber={1} />
            </Document>
        </div>
    </div>
  )
}


export default PDFViewer;