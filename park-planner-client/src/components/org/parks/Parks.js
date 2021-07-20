import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Parks extends Component {
    render() {
        return (
            <div>
                    <Link to="/mk">Magic Kingdom</Link>
                    <Link to="/epcot">Epcot</Link>
                    <Link to="/studios">Hollywood Studios</Link>
            </div>
        )
    }
}

export default Parks
