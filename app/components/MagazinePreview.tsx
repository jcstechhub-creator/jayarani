// components/MagazinePreview.tsx
"use client";

import { Document, Page, pdfjs } from 'react-pdf';
// Note: Use the static worker for better stability in Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
  pdfPath: string;
}

const MagazinePreview = ({ pdfPath }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <Document 
        file={pdfPath} 
        loading={<div className="animate-pulse bg-gray-200 w-full h-full" />}
      >
        <Page 
          pageNumber={1} 
          width={180} 
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
        />
      </Document>
    </div>
  );
};

export default MagazinePreview;