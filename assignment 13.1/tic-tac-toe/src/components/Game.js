import React from 'react';
import Status from './Status';
import Board from './Board';

const Game=(props)=>{


    return (
        <div className="game">
               <Status/>
                <Board/>

                <button className='reset'>Reset</button>
            </div>
            );
            
}


export default Game;