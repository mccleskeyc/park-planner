import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '../utility/Plan'
import NoPlans from './NoPlans'
class Index extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i} name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)
        
        if (plans.length > 0) {
        
        return (
            <div>
                <h1>All Plans</h1>
                {plans}
            </div>
        )} else 
        return (
            <div>
            <h1>All Plans</h1>
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
export default connect(mapStateToProps)(Index);
