import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Addemploy from './component/deshbordComponent/Addemploy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employ_desh from './component/deshbordComponent/Employ_desh';
import Offer_latter_create_from from './component/deshbordComponent/Offer_latter_create_from';

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
      
        {/* <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;