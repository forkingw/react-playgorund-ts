import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>forkingw</h1>
     <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
      <Link to="/invoices">Invoinces</Link>|{" "}
      <Link to="/expenses">Expense</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
