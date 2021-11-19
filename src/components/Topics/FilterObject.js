// importing combination
import React, { Component } from "react";

class FilterObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: [{"name": "Aubrey Graham", "Title": "Certified Lover Boy", "Age": 35, "Mood": "Upset"}, {"name": "Kayne West", "Title": "Donda", "Age": 44, "Idol": "Kanye West"}],
            userInput: "",
            filteredArray: []
        }
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state, userInput: e.target.value
        })
        console.log(this.state.userInput)
    };

    changeClicker = (e) => {
        let newArray = this.state.userInput.split(',')

        for(let i = 0; i < newArray.length; i++){
           
            }
        };
    };
    
    render()
    {
        return (
        <div className="puzzleBox filterObjectPB">
            <h4>
                Filter Object
            </h4>

            <span className="puzzleText">

            </span>

            <input 
                className="inputLine"
                onChange={this.changeHandler}
            />

            <button 
                className="confirmationButton"
                onClick={this.changeClicker}>
                    Filter    
            </button>

            <span className="resultsBox filterObjectRB"> 

            </span>
        </div>
        )
    }


// exporting the component
export default FilterObject