import React, { Component } from 'react'
import lands from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/lands.jpeg'
import parks from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/parks.jpeg'
import categories from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/categories.png'
import { Link } from 'react-router-dom'
import Search from './Search'
export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <h1>Park Planner</h1>
                    <h2>What Would You Like To Search By?</h2>
               <div className="img-navs">
                    <Link to="/parks"><img src={parks} alt='parks' className="img-nav" /></Link>
                    <Link to="/lands"><img src={lands} alt='lands' className="img-nav" /></Link>
                    <Link to="/categories"><img src={categories} alt='categories' className="img-nav" /></Link>
                    
                </div> 
                <p className="centered-text">Or, <Link to="/index" className="text-link">see all plans</Link>.</p>
                </div>
            </div>
        )
    }
}

export default Home
