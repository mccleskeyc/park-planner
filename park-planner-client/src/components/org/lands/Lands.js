import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Lands extends Component {
    render() {
        return (
            <div>
                    <Link to="/mk">Magic Kingdom</Link>
                    **insert MK lands icons here**
                    <Link to="/epcot">Epcot</Link>
                    **insert epcot lands icons here**
                    <Link to="/studios">Hollywood Studios</Link>
                    **insert studios lands icons here**
            </div>
        )
    }
}

export default Lands