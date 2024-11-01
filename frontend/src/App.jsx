import "./App.css";
import Header from "./components/Header";
import PDFUploaderSection from "./components/PDFUploaderSection";
import Footer from "./components/Footer";
import { useState } from "react";
import Loading from "./components/Loading";
function App() {
  const [loading,setLoading] = useState(false);
  return (
    <>
    {loading && <Loading />}
      <Header />
      <PDFUploaderSection setLoading = {setLoading}/>
      <Footer />
    </>
  );
}

export default App;
