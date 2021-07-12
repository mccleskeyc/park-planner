import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/attractions">Attractions</Link></li>
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/mk">Magic Kingdom</Link></li>
                    <li><Link to="/epcot">Epcot</Link></li>
                    <li><Link to="/studios">Studios</Link></li>
                    <li><Link to="/form">Make a Plan</Link></li>
                    <li><Link to="/index">All Plans</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
