import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div className="app">
      <div className="appImage"></div>
      <div className="appHeader">
        <h1>Welcome to our online CookBook </h1>
        <Link to="/recipes" exact className="btn btn-outline-light btn-lg btn-block">Go to recipes<i class="fa fa-arrow-right"></i></Link>
      </div>
    </div >
  );
}

export default App;