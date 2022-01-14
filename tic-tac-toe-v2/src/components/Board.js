import React from 'react';
import Cell from './Cell';

class Board extends React.Component {

    

    render = () => {
        return (
            <div className="board">
                {this.props.cells.map(
                    (cellValue, index) => (
                        <Cell value={cellValue}
                            id={index}
                            key={index}
                            result={this.props.result}
                            onCellClick={this.props.onCellClick} />)

                )}
            </div>
        );
    }
}



export default Board;