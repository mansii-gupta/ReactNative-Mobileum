import React from 'react';
// import checkGame from './services/tictactoe'

const Status = ({ next, result }) => {
    
    console.log('result', result);
    let message = `Next Move: ${next}`;
    if (result.over) {
        if (result.winner) {
            message = `Winner: "${result.winner}"`;
        }
        else {
            message = "Stalemate";
        }
    }


    return (
        <div className="status" >
            {message}
        </div>
    );
}

export default Status;