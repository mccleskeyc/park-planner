import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan'
import NoPlans from '../../utility/NoPlans'
class Studios extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i}name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)

        const filteredPlans = plans.filter(plan => plan.props.park === "Hollywood Studios")
        const foodPlans = filteredPlans.filter(plan => plan.props.category === "Food - Restaurant/Stall" || plan.props.category === "Food - Item")
        const attractionPlans = filteredPlans.filter(plan => plan.props.category === "Attraction" || plan.props.category === "None/Other")
        if (filteredPlans.length > 0) {
            return (
                <div className="container">
                <div className="content">
                    <h1>Epcot Plans</h1>
                    <h2>Attractions & Events</h2>
                    {attractionPlans}
                    <h2>Food</h2>
                    {foodPlans}
                </div></div>
            )} else 
            return (
                <div className="container">
                <div className="content">
                    <h1>Hollywood Studios Plans</h1>
                    <NoPlans /></div>
                </div>
            )
        }
    }

const mapStateToProps = state => {
    return {
        plans: state.plans
    }
}

export default connect(mapStateToProps)(Studios)
