import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

const MyPdfViewer = ({ file }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">PDF Viewer</h2>
      <div className="w-full h-96">
        <Document file={file}>
          <Page pageNumber={1} width={600} />
        </Document>
      </div>
    </div>
  );
};

export default MyPdfViewer;
