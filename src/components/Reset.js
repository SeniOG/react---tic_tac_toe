import React from 'react';
import Board from './Board';

class reset extends React.Component {
    render(){
        return(
        <button className = 'reset'
         onClick ={this.resetFunction} >
            Reset
        </button>
        ) 

    }
}

const resetFunction = () => {
    
    Array(9).fill(null)
    
}

/*const handleClick = (i) =>{
    const squares = square.slice();

    if (squares[i] === null) {
        squares[i] = X ? 'X': 'O';
        setSquare(squares)
        setPlayer(!X);
    }

*/
export default reset;