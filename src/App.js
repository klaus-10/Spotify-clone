import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// context
// import { UserContex } from "./UserContext";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/dashboard/Dashboard";
import Log from "./views/login/Log";

function App() {
  // stato generale app login user
  // const [value, setValue] = useState(true);

  return (
    // <UserContex.Provider value={{ value, setValue }}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/log" exact element={<Log />} />
        </Routes>
      </div>
    </Router>
    // </UserContex.Provider>
  );
}

export default App;
