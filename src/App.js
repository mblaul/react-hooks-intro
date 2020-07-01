import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";

const App = () => {
  const [showCard, setShowCard] = useState(true);

  const handleClick = (event) => {
    setShowCard(!showCard);
  };

  return (
    <div className="container">
      {/* <Banner /> */}
      <div className="row">
        <button
          type="button"
          className="btn btn-primary mx-auto my-4"
          onClick={handleClick}
        >
          Show/Hide Card
        </button>
      </div>
      {showCard && <Card />}
    </div>
  );
};

export default App;
