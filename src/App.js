import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppListing from "./containers/AppListing";
// import AppName from "./containers/AppName";

import "./App.css";
// import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
      // <AppName />

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
