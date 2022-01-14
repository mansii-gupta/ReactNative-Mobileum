import React from 'react';



const Cell = ({ value, onCellClick, id, result }) => {

    let handleCellClick = () => onCellClick(id);
    let style = {};

    if (value !== '  ') {
        style.cursor = 'not-allowed';
        handleCellClick = null;
    }

    if (result.over) {
        style.cursor = 'not-allowed';
        handleCellClick = null;

    } 
    
    return (
        <button className='cell'
            style={style}
            onClick={handleCellClick} >
            {value}
        </button>
    );
}

export default Cell;