import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan';
import NoPlans from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/NoPlans'

export class GrandAdventure extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i}name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)

        const filteredPlans = plans.filter(plan => plan.props.land === "Grand Adventure" && plan.props.park === "Hollywood Studios")
        if (filteredPlans.length > 0) {
            return (
                <div className="container">
                <div className="content">
                    <h1>Grand Adventure Plans</h1>
                        {filteredPlans}
                </div></div>
            )} else 
            return (
                <div className="container">
                <div className="content">
                    <h1>Grand Adventure Plans</h1>
                    <NoPlans />
                </div></div>
            )
        }
    }
const mapStateToProps = state => {
    return {
        plans: state.plans
    }
}

export default connect(mapStateToProps)(GrandAdventure)