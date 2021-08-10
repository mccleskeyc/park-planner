import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import adventureland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/adventureland.jpeg'
import fantasyland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/fantasyland.jpeg'
import frontierland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/frontierland.jpeg'
import libertysquare from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/libertysq.jpeg'
import mainst from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/mainst.jpeg'
import tomorrowland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/tomorrowland.jpeg'
export class Lands extends Component {
    render() {
        return (
            <div className="container">
            <div className="content">
            <h1>Lands</h1>
                    <h2>Magic Kingdom</h2>
                    <div className="img-navs-lands">
                        <Link to="/adventureland"><img src={adventureland} alt='adventureland' className="img-nav-lands" /></Link>
                        <Link to="/fantasyland"><img src={fantasyland} alt='fantasyland' className="img-nav-lands" /></Link>
                        <Link to="/frontierland"><img src={frontierland} alt='frontierland' className="img-nav-lands" /></Link>
                        <Link to="/libertysquare"><img src={libertysquare} alt='liberty square' className="img-nav-lands" /></Link>
                        <Link to="/mainstreet"><img src={mainst} alt='main street' className="img-nav-lands" /></Link>
                        <Link to="/tomorrowland"><img src={tomorrowland} alt='tomorrowland' className="img-nav-lands" /></Link>
                    </div>
                    
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