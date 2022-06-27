import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import './App.css';
import Demo from './Demo';
import TsPlayground from './routes/ts-palyground';

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
      <Routes>
        <Route index element={<TsPlayground />} />
        <Route path='demo' element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
