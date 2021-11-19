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
    this.setState({
        ...this.state, userInput: event.target.value
    })
    console.log(this.state.userInput)
}

changeClicker(userInput){
    let splitArray = userInput.split(",")
    let newOddArray = []
    let newEvenArray = []

    for(let i =0; i < splitArray.length; i++){
        if(splitArray[i] % 2 === 0){
            newEvenArray.push(splitArray[i])
        } else{
            newOddArray.push(splitArray[i])
        }
    }
    console.log(newEvenArray, newOddArray)
    this.setState({evenArray: newEvenArray, oddArray: newOddArray})
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
            onClick={() => {this.changeClicker(this.state.userInput)}}>
                Split
            </button>

            
            
            <span className="resultsBox" id="evenArray">
                Even array: {JSON.stringify(this.state.evenArray)}
            </span>

            <span className="resultsBox" id="oddArray">
                Odd array: {JSON.stringify(this.state.oddArray)}
            </span>


        </div>
        )
    }
}

// exporting the component
export default EvenAndOdd;