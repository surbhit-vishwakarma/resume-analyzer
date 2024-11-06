import "./App.css";
import Header from "./components/Header";
import PDFUploaderSection from "./components/PDFUploaderSection";
import Footer from "./components/Footer";
import { useState } from "react";
import Loading from "./components/Loading";
import Response from "./components/Response";
function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("hello");
  const [showPdf, setShowPdf] = useState(true);
  return (
    <>
      {loading && <Loading />}
      <Header />
      {showPdf && (
        <PDFUploaderSection
          setLoading={setLoading}
          setResponse={setResponse}
          setShowPdf={setShowPdf}
        />
      )}
      {!showPdf && <Response 
        response = {response}
        setShowPdf = {setShowPdf}
      />}
      <Footer />
    </>
  );
}

export default App;
