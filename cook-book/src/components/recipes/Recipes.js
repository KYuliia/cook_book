import React from 'react';
import './Recipes.css';

import { BrowserRouter as Router, Link, Route, useHistory } from 'react-router-dom';
import MyRecipes from '../myRecipes/MyRecipes.js'



const Recipes = () => {
    let history = useHistory();
    return (
        <Router>
            <div className="recipes">

                <div className="recipesBlocks">
                    <div className="col-4 recipesList" >
                        <ul className="list-group-recipes">

                            <li className="list-group-recipes-li-header" >My Recipes<i className="fa fa-arrow-right"></i></li>
                            <Link className="list-group-recipes-li" to="/" onClick={history.goBack} >Back to Main</Link>


                        </ul>
                    </div>
                    <div className="col-8 recipesContent"><MyRecipes /></div>
                </div>
            </div>
        </Router>
    );
}

export default Recipes;