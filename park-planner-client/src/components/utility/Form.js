import React, { Component } from 'react'
import {addPlan} from '/Users/cmccleskey/Development/code/personal/park-planner/park-planner-client/src/actions'
import {connect} from 'react-redux'
class Form extends Component {
    state = {
        name: "",
        park: "",
        land: "",
        priority: "",
        notes: "",
        category: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);

        this.props.addPlan(this.state, this.props.history);
    }

    render() {
        return (
            <div>
                <h1>Make a Plan</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Plan Name: </label>
                        <input type="text" name="name" id="name" autoComplete="off" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="park">Park: </label>
                        <select id="park" name="park" value={this.state.park} onChange={this.handleChange}>
                            <option value="" disabled>Select Park</option>
                            <option value="Magic Kingdom">Magic Kingdom</option>
                            <option value="Epcot">Epcot</option>
                            <option value="Hollywood Studios">Hollywood Studios</option>
                        </select>
                    </div>
                        <label htmlFor="land">Land: </label>
                        <select id="land" name="land" value={this.state.land} onChange={this.handleChange} >
                            <option value="" disabled>Select Land</option>
                        {/* Magic Kingdom */}
                            <option value="" disabled>---Magic Kingdom---</option>
                            <option value="Adventureland">Adventureland</option>
                            <option value="Fantasyland">Fantasyland</option>
                            <option value="Frontierland">Frontierland</option>
                            <option value="Liberty Square">Liberty Square</option>
                            <option value="Main Street">Main Street</option>
                            <option value="Tomorrowland">Tomorrowland</option>

                        {/* Epcot */}
                            <option value="" disabled>---Epcot---</option>
                            <option value="American Adventure">American Adventure</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Future World">Future World</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Norway">Norway</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="World Showcase - Other">World Showcase - Other</option>

                        {/* Studios */}
                            <option value="" disabled>---Hollywood Studios---</option>
                            <option value="Animation Corner">Animation Corner</option>
                            <option value="Commisary Lane">Commisary Lane</option>
                            <option value="Echo Lake">Echo Lake</option>
                            <option value="Star Wars: Galaxy's Edge">Star Wars: Galaxy's Edge</option>
                            <option value="Grand Adventure">Grand Adventure</option>
                            <option value="Hollywood Boulevard">Holywood Boulevard</option>
                            <option value="Pixar Place">Pixar Place</option>
                            <option value="Sunset Boulevard">Sunset Boulevard</option>
                            <option value="Toy Story Land">Toy Story Land</option>
                        </select>
                    <div>
                    <label htmlFor="priority">Priority: </label>
                        <select id="priority" name="priority" value={this.state.priority} onChange={this.handleChange} >
                            <option value="" disabled>Select Priority</option>
                            <option value="Must">Must</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="category">Category: </label>
                        <select id="category" name="category" value={this.state.category} onChange={this.handleChange} >
                            <option value="" disabled>Select Category</option>
                            <option value="Food - Item">Food - Item</option>
                            <option value="Food - Restaurant/Stall">Food - Restaurant/Stall</option>
                            <option value="Attraction">Attraction</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="notes">Notes: </label>
                        <textarea id="notes" name="notes" value={this.state.notes} onChange={this.handleChange}></textarea>
                    </div>

                    <input type="submit" value="Make Plan" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addPlan})(Form)
