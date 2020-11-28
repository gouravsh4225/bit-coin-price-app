import React from "react";

// import Important Component
import Header from "./Components/Header/Header";
import CurrentPrice from "./Components/CurrentPrice/CurrentPrice";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <CurrentPrice />
      </div>
      <Footer />
    </div>
  );
}

export default App;
