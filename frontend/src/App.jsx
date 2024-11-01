import "./App.css";
import Header from "./components/Header";
import PDFUploaderSection from "./components/PDFUploaderSection"
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  let [pageViews, setPageViews] = useState(0);
  
  return(
    <>
    <Header />
    <PDFUploaderSection pageViews= {pageViews}/>
    <Footer />
    </>
  )
}

export default App;
