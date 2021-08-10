import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// mk land images
import adventureland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/adventureland.jpeg'
import fantasyland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/fantasyland.jpeg'
import frontierland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/frontierland.jpeg'
import libertysquare from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/libertysq.jpeg'
import mainst from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/mainst.jpeg'
import tomorrowland from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/tomorrowland.jpeg'

//epcot land images
import americanadventure from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/american-adventure.jpeg'
import canada from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/canada.jpeg'
import china from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/china.jpeg'
import france from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/france.jpeg'
import futureworld from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/futureworld.jpeg'
import germany from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/germany.jpeg'
import italy from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/italy.png'
import japan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/japan.jpeg'
import mexico from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/mexico.png'
import morocco from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/morocco.jpeg'
import norway from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/norway.jpeg'
import uk from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/uk.jpeg'
import worldshowcase from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/imgs/worldshowcase.jpeg'













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

                    <h2>Epcot</h2>
                    <div className="img-nav-labs">
                        <Link to="/americanadventure"><img src={americanadventure} alt='american adventure' className="img-nav-lands" /></Link>
                        <Link to="/canada"><img src={canada} alt='canada' className="img-nav-lands" /></Link>
                        <Link to="/china"><img src={china} alt='china' className="img-nav-lands" /></Link>
                        <Link to="/france"><img src={france} alt='france' className="img-nav-lands" /></Link>
                        <Link to="/futureworld"><img src={futureworld} alt='future world' className="img-nav-lands" /></Link>
                        <Link to="/germany"><img src={germany} alt='germany' className="img-nav-lands" /></Link>
                        <Link to="/italy"><img src={italy} alt='italy' className="img-nav-lands" /></Link>
                        <Link to="/japan"><img src={japan} alt='japan' className="img-nav-lands" /></Link>
                        <Link to="/mexico"><img src={mexico} alt='mexico' className="img-nav-lands" /></Link>
                        <Link to="/morocco"><img src={morocco} alt='morocco' className="img-nav-lands" /></Link>
                        <Link to="/norway"><img src={norway} alt='norway' className="img-nav-lands" /></Link>
                        <Link to="/uk"><img src={uk} alt='uk' className="img-nav-lands" /></Link>
                        <Link to="/worldshowcase"><img src={worldshowcase} alt='world showcase - other' className="img-nav-lands" /></Link>





                    </div>
                    <Link to="/studios">Hollywood Studios</Link>
                    **insert studios lands icons here**
            </div>
            </div>
        )
    }
}

export default Lands