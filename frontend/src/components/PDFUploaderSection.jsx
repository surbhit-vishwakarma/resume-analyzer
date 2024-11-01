import { useRef, useState } from "react";
import axios from 'axios';
function PDFUploaderSection(props) {
  const {setLoading} = props;
  const fileInputRef = useRef(null); // Use ref to access the file input element
  const pdfFileRef = useRef(null); // Use ref to store the selected PDF file

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically open the file dialog
  };

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true); // Set loading to true before the API call
    setError(null); // Reset error state
    try {
      const response = await axios.get("https://httpbin.org/delay/10");
      console.log(response.data); // Log the fetched data
      setData(response.data); // Update the state with the fetched data
    } catch (err) {
      setError(err.message); // Set the error message if the API call fails
      console.error("Error fetching data:", err); // Log the error
    } finally {
      setLoading(false); // Set loading to false after the call completes
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      // Check if it's a PDF
      pdfFileRef.current = file; // Store the file in useRef
      console.log("Selected PDF:", pdfFileRef.current); // You can log or do something with the file
      fetchData();
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
          <p className="mb-4 text-center">
            Note: Resume format must be of PDF type.
          </p>
        </div>
      </div>
    </>
  );
}

export default PDFUploaderSection;
