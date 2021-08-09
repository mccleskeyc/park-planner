import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Lands extends Component {
    render() {
        return (
            <div className="container">
            <div className="content">
            <h1>Lands</h1>
                    <Link to="/mk">Magic Kingdom</Link>
                     
                    <Link to="/epcot">Epcot</Link>
                    **insert epcot lands icons here**
                    <Link to="/studios">Hollywood Studios</Link>
                    **insert studios lands icons here**
            </div>
            </div>
        )
    }
}

export default Lands