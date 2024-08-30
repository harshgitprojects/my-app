
import './App.css';

import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Addemploy from './component/deshbordComponent/Addemploy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employ_desh from './component/deshbordComponent/Employ_desh';
import Offer_latter_create_from from './component/deshbordComponent/Offer_latter_create_from';
import Salary_slip_create_from from './component/deshbordComponent/Salary_slip_create_from';
import Nave from './component/Nave';
import Employ_attandes from './component/deshbordComponent/Employ_attandes';
import Mail_from from './component/deshbordComponent/Mail_from';
import About from './component/About';
import Salary_slip from './component/deshbordComponent/Salary_slip';
import Salary_slip_table from './component/deshbordComponent/Salary_slip_table';


// import Team from './component/Team';
// import Offer_latter_pdf from './component/deshbordComponent/Offer_latter_pdf';


function App() {
  return (
    <div className=" flex">
      <Sidebar/>
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route index element={<Home />} /> 
      <Route path="/Employ_desh" element={<Employ_desh />} />
      <Route path="/addemploy" element={<Addemploy />} />
      <Route path="/Offer_latter" element={<Offer_latter_create_from />} />
      <Route path="/Salary_slip" element={<Salary_slip_create_from />} />
      <Route path="/Employ_attandes" element={<Employ_attandes />} />
      <Route path="/Mail" element={<Mail_from/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Slip" element={<Salary_slip/>} />
      <Route path="/Slip_table" element={<Salary_slip_table/>} />
      
      {/* <Route path="/About" element={<Team />} />
       */}
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;