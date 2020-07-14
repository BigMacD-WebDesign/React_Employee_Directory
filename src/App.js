//Required Imports.
import React from 'react';
import './App.css';
import Employees from "./components/Employees";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Header from "./components/Header";


//App Function to return data from components.
function App() {
  return (
    <div className="App">
      <Header /><br></br>
      <Employees />
      
    </div>
  );
}

export default App;
