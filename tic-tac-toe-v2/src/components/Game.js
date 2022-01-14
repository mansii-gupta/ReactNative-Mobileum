import React from 'react';
import Status from './Status';
import Board from './Board';
import { checkGame } from '../services/tictactoe.js'
import MovesBoard from './MovesBoard'
import If from './If.js';


class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        // this.state = {
        //     cells: ['  ', '  ', '  ',
        //         '  ', '  ', '  ',
        //         '  ', '  ', '  '],
        //     next: 'O'

        // }
        // this.result = checkGame(this.props.cells);
    }

    getInitialState = (id) => {
        const _state = {
            cells: ['  ', '  ', '  ',
                '  ', '  ', '  ',
                '  ', '  ', '  '],
            next: 'O',
            moves: []
        }
        _state.result = checkGame(_state.cells);

        return _state;
    }




    handleCellClick = (id) => {

        const cells = [...this.state.cells]
        if (cells[id] !== '  ') { return; }
        cells[id] = this.state.next
        this.setState({ cells: cells })
        const next = this.state.next === 'O' ? 'X' : 'O'
        this.setState({ next: next })

        const new_result = checkGame(cells);
        this.setState({ result: new_result })

        if (new_result.over) {
            this.props.onGameOver(new_result);
            if(new_result.winner) {
                //green hilight
            }
            else{
                //dim all cells
            }
        }

        const move = {
            player: this.state.next,
            position: id + 1
        };
        const moves = [...this.state.moves, move];
        this.setState({ moves: moves });

    }

    handleReset = (id) => {
        if (this.state.result.over)
            this.setState(this.getInitialState());
    }

    render = () => {
        return (
            <div className='game'>

                <br />
                <Status result={this.state.result}
                    next={this.state.next} />

                <div className='column-layout'>

                    <Board cells={this.state.cells}
                        result={this.state.result}
                        onCellClick={this.handleCellClick} />

                    <MovesBoard moves={this.state.moves} />

                </div>

                <div className='filler' />

                <br />

                <If condition={this.state.result.over}>
                    <button className="reset"
                        onClick={this.handleReset}>
                        Reset
                    </button>
                </If>


            </div>
        );
    }
}

export default Game;
