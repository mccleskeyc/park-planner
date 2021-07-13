import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan'

class Food extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i}name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)

        const filteredPlanStall = plans.filter(plan => plan.props.category === "Food - Restaurant/Stall")
        const filteredPlansItem = plans.filter(plan => plan.props.category === "Food - Item")
        return (
            <div>
                <h1><u>All Food</u></h1>
                <div>
                    <h2>Restaurants and Stalls</h2>
                    {filteredPlanStall}
                </div>
                <div>
                    <h2>Items</h2>
                    {filteredPlansItem}
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
