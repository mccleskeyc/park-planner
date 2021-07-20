import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Parks extends Component {
    render() {
        return (
            <div className="container">
            <div className="content">
            <h1>All Parks</h1>
                    <Link to="/mk">Magic Kingdom</Link>
                    <Link to="/epcot">Epcot</Link>
                    <Link to="/studios">Hollywood Studios</Link>
            </div>
            </div>
        )
    }
}

export default Parks
