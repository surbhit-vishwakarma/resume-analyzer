import { useRef, useState } from "react";
import axios from "axios";
import Form from "./Form";
function PDFUploaderSection(props) {
  const { setLoading } = props;
  const fileInputRef = useRef(null); // Use ref to access the file input element
  const pdfFileRef = useRef(null); // Use ref to store the selected PDF file

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically open the file dialog
  };

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [field, setField] = useState("");
  const [targetedOrganisation, setTargetedOrganisation] = useState("");
  const [yoe, setYoe] = useState("");
  const [ryoe, setRyoe] = useState("");

  function onSubmit() {
    fetchData();
  }

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const formData = new FormData();

    // Metadata object
    const metadata = {
      field: field,
      org: targetedOrganisation,
      yoe: yoe,
      rYoe: ryoe,
    };

    // Attach the PDF file

    formData.append("file", pdfFileRef.current); // Append PDF file

    // Attach metadata as plain text
    formData.append("metadata", JSON.stringify(metadata));
    console.log(pdfFileRef.current);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/analyze/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      // Check if it's a PDF
      pdfFileRef.current = file; // Store the file in useRef
      event.target.value = "";
    } else {
      alert("Please select a PDF file");
    }
  };
  return (
    <>
      <div className="flex justify-center font-mono">
        <div className="border-dotted border-2 border-black border-opacity-30 h-[30rem] w-[50rem] m-[5rem] mx-auto flex flex-col justify-between ">
          <div className="flex flex-col items-center justify-start">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="application/pdf"
            />
            <button
              onClick={handleButtonClick}
              className="mt-16 border border-black rounded-md w-[250px] h-[100px] bg-[#CE2E6C] text-[#F0DECB] text-2xl font-bold"
            >
              Upload Here
            </button>
            <p className="mt-1">*Click here and select your resume</p>
          </div>
          <Form
            field={setField}
            targetedOrganisation={setTargetedOrganisation}
            yoe={setYoe}
            ryoe={setRyoe}
            onSubmit={onSubmit}
          />
          <p className="mb-4 text-center">
            Note: Resume format must be of PDF type.
          </p>
        </div>
      </div>
    </>
  );
}

export default PDFUploaderSection;
