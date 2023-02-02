import React from "react";

const PDFViewer = ({ base64 }) => {
  return (
    <iframe
      title="PDF Viewer"
      src={`data:application/pdf;base64,${base64}`}
      frameBorder={0}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default PDFViewer;




