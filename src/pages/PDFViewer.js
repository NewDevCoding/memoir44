import React from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import "./CSSpages/scenarios.css"
// "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"
// this css file removes the space and extra text from displaying under the pdf file
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc =  new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url ).toString();


  // new URL(
  //   "pdfjs-dist/build/pdf.worker.mjs",
  //   import.meta.url ).toString();

const PDFViewer = ({testPDF}) => {
 


  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className='scenarios'>
        <div>
            <Document file={testPDF}>
                {/* renderTextLayer removes the text from under the pdf, but leaves a large space */}
                <Page pageNumber={1} renderTextLayer={false} scale={2.0}/>
            </Document>
        </div>
    </div>
  )
}


export default PDFViewer;
