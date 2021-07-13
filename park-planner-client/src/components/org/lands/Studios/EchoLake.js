import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan'

export class EchoLake extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i}name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)

        const filteredPlans = plans.filter(plan => plan.props.land === "Echo Lake" && plan.props.park === "Hollywood Studios")
        return (
            <div>
                <h1><u>All Echo Lake Plans</u></h1>
                <div>
                    {filteredPlans}
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

export default connect(mapStateToProps)(EchoLake)