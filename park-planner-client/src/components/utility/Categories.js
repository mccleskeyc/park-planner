import React, { Component } from 'react'
import attractions from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/attractions.jpeg'
import food from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/food.jpeg'
import { Link } from 'react-router-dom'
export class Categories extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <h1>Park Planner</h1>
                    <h2>Categories</h2>
               <div className="img-navs">
                    <Link to="/attractions"><img src={attractions} alt='attractions' className="img-nav" /></Link>
                    <Link to="/food"><img src={food} alt='food' className="img-nav" /></Link>
                </div> 
                </div>
                
            </div>
        )
    }
}

export default Categories