import React, { Component } from 'react'
import {connect} from 'react-redux'
import Restaurants from './food/Restaurants'
import Items from './food/Items'
class Food extends Component {
    render() {
        return (
            <div className="container">
            <div className="content">
            <h1>All Food</h1>
                <Restaurants />
                <Items />
            </div>
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
