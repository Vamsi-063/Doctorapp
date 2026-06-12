import Navbar from "./Components/Navbar";
import Section from "./Components/section";
import "./Components/styles.css";
import Addnewdoctor from "./Components/Addnewdoctor";
import { Routes, Route } from "react-router-dom";
import Doctordetails from "./Components/Doctordetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/add-doctor" element={<Addnewdoctor />} />
        <Route path="/doctor/:id" element={<Doctordetails />} />
      </Routes>
    </div>
  )
}

export default App;