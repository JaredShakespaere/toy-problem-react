// importing combination
import React, { Component } from "react";

class EvenAndOdd extends Component {
    constructor(props){
                
    super(props);

    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ""
    }
}

changeHandler = (event) => {
    event.persist();

    let value = event.target.value;

    this.setState({
        [event.target.userInput]: value
    })

    console.log(this.state.userInput)

}

changeClicker = (event) => {
    event.persist();

    let value = event.target.value;

    this.setState({
        [event.target.evenArray]: value,
        [event.target.oddArray]: value
    })
    console.log(this.state.evenArray, this.state.oddArray)
}

// evenAndOddSort(){
//     if()
// }

    render()
    {
        return (
        <div className="puzzleBox evenAndOddPB">
            
            <h4>
                Evens and Odds
            </h4>
            
            <input 
                className="inputLine"
                onChange={this.changeHandler} 
                />
        
            
            <button 
            className="confirmationButton"
            onClick={this.changeClicker}
            />

            
            
            <span className="resultsBox" id="evenArray">
                Even array: [{this.state.evenArray}]
            </span>

            <span className="resultsBox" id="oddArray">
                Odd array: [{this.state.oddArray}]
            </span>


        </div>
        )
    }
}

// exporting the component
export default EvenAndOdd;