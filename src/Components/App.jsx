import './App.css';
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App(){
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1>Testando...</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;