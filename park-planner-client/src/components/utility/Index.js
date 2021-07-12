import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '../utility/Plan'
class Index extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i} name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)
        return (
            <div>
                All Plans
                {plans}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plans: state.plans
    }
}
export default connect(mapStateToProps)(Index);
