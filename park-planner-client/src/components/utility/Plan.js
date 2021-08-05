import React, { Component } from 'react'

export class Plan extends Component {
    render() {
        const {name, category, park, land, priority, notes, date} = this.props;
        return (
            <div className="plan">
                <h3 className="centered-text">✨ {name} ✨</h3>
                <p><b>Category: </b>{category}</p>
                <p><b>Park: </b>{park}</p>
                <p><b>Land: </b>{land}</p>
                <p><b>Priority: </b>{priority}</p>
                <p><b>Notes: </b>{notes}</p>
            </div>
            
        )
    }
}

export default Plan
