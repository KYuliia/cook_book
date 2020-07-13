import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import Recipes from './components/recipes/Recipes.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={App} exact></Route>
      <Route path='/recipes' component={Recipes} exact></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

