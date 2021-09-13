import React,{useState} from 'react';
import Square from './Square'
import Reset from './Reset';

function Board(){

    const [square , setSquare] = useState(Array(9).fill(null));
    const [X, setPlayer] = useState(true);

    const winner = calculateWinner(square); 
    let status;
    if (winner){
        status = 'Winner: ' + winner;
    }

    else if (winner!== true && square[0]!== null && square[1]!== null && square[2]!== null && square[3]!== null && square[4]!= null && square[5]!== null && square[6]!== null && square[7]!== null && square[8] !== null){
        status = 'Tie';
    }
    
    else{
        status = 'Next Player: ' + (X? "X":"O");
    }

    const renderSquare = (i) =>{
        return (
            <Square value={square[i]} onClick = {()=>handleClick(i)} />
        )
    }

    const handleClick = (i) =>{
        const squares = square.slice();

        if (squares[i] === null) {
            squares[i] = X ? 'X': 'O';
            setSquare(squares)
            setPlayer(!X);
        }

        
        
        
        
    }

    function calculateWinner(squares){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for (let i = 0; i<lines.length; i++) {
            const [a,b,c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }

        return null;
    }

    function resetBoard() {
        const squares = square.slice();
        squares[0] = null
        squares[1] = null
        squares[2] = null
        squares[3] = null
        squares[4] = null
        squares[5] = null
        squares[6] = null
        squares[7] = null
        squares[8] = null
        setSquare(squares)
      }

    return (
        <div className="board">
            <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>

            <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>

            <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
            {status}
            <br/>
            <br/>
            <Reset onClick={() => resetBoard()}/>
        </div>
    )

        
}

export default Board;