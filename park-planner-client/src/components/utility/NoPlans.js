import React, { Component } from 'react'

export class NoPlans extends Component {
    render() {
        return (
            <div className="container">
                Looks like you don't have any plans made yet! Make some <a href="/form">here</a>!
            </div>
        )
    }
}

export default NoPlans
