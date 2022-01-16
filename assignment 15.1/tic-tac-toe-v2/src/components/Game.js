import React from 'react';
import Status from './Status';
import Board from './Board';
import { checkGame } from '../services/tictactoe.js'
import MovesBoard from './MovesBoard'
import If from './If.js';
import Stopwatch from './Stopwatch';


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

    getInitialState = (next = 'O', running = false, previousStart, restart = false) => {
        const _state = {
            cells: ['  ', '  ', '  ',
                '  ', '  ', '  ',
                '  ', '  ', '  '],
            next: next,
            previousStart: previousStart,
            moves: [],
            running: running,
            restart: restart
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
        }

        const move = {
            player: this.state.next,
            position: id + 1
        };
        const moves = [...this.state.moves, move];
        this.setState({ moves: moves });

    }


    handleStart = () => {
        console.log('previous start', this.state.previousStart);
        let next = this.state.previousStart === 'O' ? 'X' : 'O';
        if (this.state.result.over) {
            this.setState(this.getInitialState(next, true, next, true));
        }
        else {
            this.setState(this.getInitialState(next, true, next, false));
        }
    }

    render = () => {
        return (
            <div className='game'>
                {!this.state.running ? <p>Hit Start to Continue</p> : " "}
                <div className='column-layout game-header'>

                    <Stopwatch label="O"
                        player={this.state.next === 'O'}
                        result={this.state.result}
                        running={this.state.running}
                        restart={this.state.restart}
                        drawWinner={this.drawWinner}
                    />
                    <Status result={this.state.result} next={this.state.next} />
                    <Stopwatch label="X"
                        player={this.state.next === 'X'}
                        result={this.state.result}
                        running={this.state.running}
                        restart={this.state.restart}
                        drawWinner={this.drawWinner}
                    />

                </div>

                <br />

                <div className='column-layout'>

                    <Board cells={this.state.cells}
                        result={this.state.result}
                        onCellClick={this.handleCellClick} />

                    <MovesBoard moves={this.state.moves} />

                </div>

                <div className='filler' />

                <br />

                <If condition={this.state.result.over || this.state.result.movesLeft === 9 && !this.state.running}>
                    <button className="reset"
                        onClick={this.handleStart}>
                        Start
                    </button>
                </If>


            </div>
        );
    }
}

export default Game;
