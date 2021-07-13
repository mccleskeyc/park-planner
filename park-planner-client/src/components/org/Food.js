import React, { Component } from 'react'
import {connect} from 'react-redux'
import Restaurants from './food/Restaurants'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan'
import Items from './food/Items'
class Food extends Component {
    render() {
        return (
            <div>
                <Restaurants />
                <Items />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        plans: state.plans
    }
}

export default connect(mapStateToProps)(Food)
