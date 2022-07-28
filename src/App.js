import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/homepage/Homepage.component";

import ShopPage from "./Pages/Shop/Shop.component";

import Header from "./component/header/Header.component";
 


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/shop" element={<ShopPage/>} />
        </Routes>
      </Router>
    </> 
  );
}

export default App;
