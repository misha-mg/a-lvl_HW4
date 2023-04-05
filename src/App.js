import "./App.css";
import { CompList } from "./components/comp-list"
import { About } from "./components/about"
import { NotFound } from "./components/not-found"

// import { GoodListThread } from "./header/good-list-thread";
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>

    <nav className="header-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Routes>

      <Route
        path="/"
        element={
          <div className="App">
            <header className="App-header">
              <CompList/>
            </header>
          </div>
        }
      >
      </Route>

      <Route
        path="about"
        element={
          
        <About />
        }
      >
      </Route>

      <Route
        path="*"
        element={
          
        <NotFound />
        }
      >
      </Route>


    </Routes>
  
    </BrowserRouter>


  );
}

export default App;