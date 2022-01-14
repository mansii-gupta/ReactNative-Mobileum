import Game from './components/Game';
import AppHeader from './components/AppHeader';
import React from 'react';
import ScoreBoard from './components/ScoreBoard';


class App extends React.Component {
    state = {
        score: {
            games: 0,
            O: 0,
            X: 0,
            draw: 0
        }
    }

    handleGameOver = (result) => {
        let score = { ...this.state.score };

        score.games++;
        if (result.winner) {
            score[result.winner]++;
            console.log(result.winner, 'winner ');
            console.log(score.O,'O');
            console.log(score.X,'X');
        }
        else {
            score.draw++;
        }
        this.setState({ score });

    }

    render = (props) => {
        return (
            <div className='app'>
                <AppHeader title="Tic Tac Toe" />
                <ScoreBoard 
                score={this.state.score}/>
                <Game
                    onGameOver={this.handleGameOver} />
            </div>
        );
    }
}



export default App;