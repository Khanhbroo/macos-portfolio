import { WindowControls } from "@/components";
import WindowWrapper from "@/hoc/WindowWrapper";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1);
    }
  };
  const nextPage = () => {
    if (numPages && pageNumber < numPages) {
      changePage(1);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <div className="flex items-center gap-4 bg-white px-3 py-1 rounded-full shadow-sm">
          <button
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="disabled:opacity-30 hover:text-blue-500 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          
          <p className="text-xs font-medium min-w-[60px] text-center">
            {pageNumber} / {numPages || "--"}
          </p>

          <button
            disabled={pageNumber >= (numPages || 1)}
            onClick={nextPage}
            className="disabled:opacity-30 hover:text-blue-500 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer ml-3 p-1 hover:bg-gray-200 rounded"
          title="Download resume"
        >
          <Download className="icon" size={24} />
        </a>
      </div>

      <div>
        <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} renderAnnotationLayer renderTextLayer scale={1.06} />
        </Document>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
