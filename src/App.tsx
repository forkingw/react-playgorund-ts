import React from 'react';
// import { Outlet } from 'react-router-dom';
import './App.css';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
     {/* <h1>forkingw</h1>
     <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
      <NavLink to="/invoices">Invoinces</NavLink>|{" "}
      <NavLink to="/expenses">Expense</NavLink>
      </nav> */}
      {/* <Outlet /> */}
      <Demo />
    </div>
  );
}

export default App;
