import React, { Component } from 'react'
import {connect} from 'react-redux'
import Plan from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/components/utility/Plan'
import NoPlans from '../../utility/NoPlans'
import Search from '../../utility/Search'
class MK extends Component {
    render() {
        const plans = this.props.plans.map((plan, i) => <Plan key={i}name={plan.name} category={plan.category} park={plan.park} land={plan.land} priority={plan.priority} notes={plan.notes}/>)

        const filteredPlans = plans.filter(plan => plan.props.park === "Magic Kingdom")
        const adventureLand = filteredPlans.filter(plan => plan.props.land === "Adventureland")
        const fantasyLand = filteredPlans.filter(plan => plan.props.land === "Fantasyland")
        const frontierLand = filteredPlans.filter(plan => plan.props.land === "Frontierland")
        const tomorrowLand = filteredPlans.filter(plan => plan.props.land === "Tomorrowland")
        const libertySquare = filteredPlans.filter(plan => plan.props.land === "Liberty Square")
        const mainStreet = filteredPlans.filter(plan => plan.props.land === "Main Street")
        const other = filteredPlans.filter(plan => plan.props.land === "None/Other")
        if (filteredPlans.length > 0) {
            return (
                <div className="container">
                <div className="content">
                    <h1>Magic Kingdom Plans</h1>
                    <Search />
                    <h2>Adventureland</h2>
                        {adventureLand}
                    <h2>Fantasyland</h2>
                        {fantasyLand}
                    <h2>Frontierland</h2>
                        {frontierLand}
                    <h2>Liberty Square</h2>
                        {libertySquare}
                    <h2>Main Street</h2>
                        {mainStreet}
                    <h2>Tomorrowland</h2>
                        {tomorrowLand}
                    <h2>Other</h2>
                        {other}
                        </div>
                </div>
            )} else 
            return (
                <div className="container">
                <div className="content">
                    <h1>Magic Kingdom Plans</h1>
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

export default connect(mapStateToProps)(MK)
