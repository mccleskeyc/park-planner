import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/logo.png'
export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                
                <ul>
                <img src={Logo} className="logo" />
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/attractions"className="link">Attractions</Link></li>
                    <li><Link to="/food" className="link">Food</Link></li>
                    <li><Link to="/mk" className="link">Magic Kingdom</Link></li>
                    <li><Link to="/epcot" className="link">Epcot</Link></li>
                    <li><Link to="/studios" className="link">Studios</Link></li>
                    <li><Link to="/form" className="link">Make a Plan</Link></li>
                    <li><Link to="/index" className="link">All Plans</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
