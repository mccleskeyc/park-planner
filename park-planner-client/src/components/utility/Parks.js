import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import epcot from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/epcot.jpeg'
import magickingdom from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/magic-kingdom.jpeg'
import studios from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/studios.jpeg'
export class Parks extends Component {
    render() {
        return (
            <div className="container">
            <div className="content">
            <h1>All Parks</h1>
            <div className="img-navs">
                    <Link to="/mk"><img src={magickingdom} alt='magic kingdom' className="img-nav" /></Link>
                    <Link to="/epcot"><img src={epcot} alt='epcot' className="img-nav" /></Link>
                    <Link to="/studios"><img src={studios} alt='hollywood studios' className="img-nav" /></Link>
            </div>
            </div>
            </div>
        )
    }
}

export default Parks
