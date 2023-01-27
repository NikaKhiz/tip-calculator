import React from "react";
import Totals from "./components/Totals";
import Tips from "./components/Tips";
function App() {
  return (
    <div className="container">
      <div className="app">
        <Tips />
        <Totals />
      </div>
    </div>
  );
}

export default App;
