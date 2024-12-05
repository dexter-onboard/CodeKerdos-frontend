import { useState } from "react";
import { Document, Page } from "react-pdf";

function TermsOfUse() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.5); // Initial zoom level

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  }

  function zoomIn() {
    setScale((prevScale) => prevScale + 0.2);
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            backgroundColor: "cornsilk",
          }}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            backgroundColor: "cornsilk",
          }}
        >
          Next
        </button>
        <button
          onClick={zoomOut}
          disabled={scale <= 0.5}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            backgroundColor: "cornsilk",
          }}
        >
          Zoom Out
        </button>
        <button
          onClick={zoomIn}
          style={{
            margin: "0 5px",
            padding: "10px 20px",
            backgroundColor: "cornsilk",
          }}
        >
          Zoom In
        </button>
      </div>
      <Document
        file="https://codekerdos.s3.us-east-1.amazonaws.com/CodeKerdos-Terms+of+Service.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default TermsOfUse;
