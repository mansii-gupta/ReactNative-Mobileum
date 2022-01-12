import React from 'react';
import Cell from './Cell';


const Board=(props)=>{


    return (
            <div className='board'>
                <div className='cells'>
                    <Cell value="_" />
                    <Cell value="_"/>
                    <Cell value="_"/>

                    <Cell value="_"/>
                    <Cell value="_"/>
                    <Cell value="_"/>

                    <Cell value="_"/>
                    <Cell value="_"/>
                    <Cell value="_"/>
              </div>
            </div>
            );
            
}


export default Board;