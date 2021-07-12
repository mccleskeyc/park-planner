import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: "",
        park: "",
        land: "",
        priority: "",
        notes: ""
    }
    render() {
        return (
            <div>
                <h1>Make a Plan</h1>
                <form>
                    <div>
                        <label htmlFor="name">Plan Name: </label>
                        <input type="text" id="name" autoComplete="off"/>
                    </div>
                    <div>
                        <label htmlFor="park">Park: </label>
                        <select id="park" name="park" >
                            <option value="" disabled>Select Park</option>
                            <option value="MK">Magic Kingdom</option>
                            <option value="Epcot">Epcot</option>
                            <option value="Studios">Hollywood Studios</option>
                        </select>
                    </div>
                        <label htmlFor="land">Land: </label>
                        <select id="land" name="land" >
                            <option value="" disabled>Select Land</option>
                        {/* Magic Kingdom */}
                            <option value="" disabled>---Magic Kingdom---</option>
                            <option value="Adventureland">Adventureland</option>
                            <option value="Fantasyland">Fantasyland</option>
                            <option value="Frontierland">Frontierland</option>
                            <option value="MainStreet">Main Street</option>
                            <option value="Tomorrowland">Tomorrowland</option>

                        {/* Epcot */}
                            <option value="" disabled>---Epcot---</option>
                            <option value="AmericanAdventure">American Adventure</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="FutureWorld">Future World</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Norway">Norway</option>
                            <option value="UK">United Kingdom</option>
                            <option value="WorldShowcaseOther">World Showcase - Other</option>

                        {/* Studios */}
                            <option value="" disabled>---Hollywood Studios---</option>
                            <option value="AnimationCorner">Animation Corner</option>
                            <option value="CommisaryLane">Commisary Lane</option>
                            <option value="EchoLake">Echo Lake</option>
                            <option value="GalaxysEdge">Star Wars: Galaxy's Edge</option>
                            <option value="GrandAdventure">Grand Adventure</option>
                            <option value="HollywoodBlvd">Holywood Boulevard</option>
                            <option value="PixarPlace">Pixar Place</option>
                            <option value="SunsetBlvd">Sunset Boulevard</option>
                            <option value="ToyStoryLand">Toy Story Land</option>
                        </select>
                    <div>
                    <label htmlFor="priority">Priority: </label>
                        <select id="priority" name="priority" >
                            <option value="" disabled>Select Priority</option>
                            <option value="Must">Must</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="notes">Notes: </label>
                        <textarea id="notes"></textarea>
                    </div>

                    <input type="submit" value="Make Plan" />
                </form>
            </div>
        )
    }
}

export default Form
