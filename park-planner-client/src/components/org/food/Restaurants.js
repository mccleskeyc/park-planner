import React, { Component } from 'react'
import {connect} from 'react-redux'
import NoPlans from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/NoPlans'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan'

class Food extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i}name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes} date={plan.date}/>)
        const filteredPlanStall = plans.filter(plan => plan.props.category === "Food - Restaurant/Stall")
        if (filteredPlanStall.length > 0) {
        return (
            <div>
                
                <div>
                    <h2>Restaurants and Stalls</h2>
                    {filteredPlanStall}
                </div>
            </div>
        )} else 
        return (
            <div>
                <h2>Restaurants and Stalls</h2>
                <NoPlans />
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
