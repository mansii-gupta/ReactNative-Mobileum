import React from 'react';

const ScoreBoard = ({ score }) => {
    return (
        <div className="scoreBoard">
            <h2>Score Board</h2>
            <table>
                <tbody><td>Total Game</td><td>{score?.games || 0}</td></tbody>
                <tbody><td >Wins X</td><td>{score?.X || 0}</td></tbody>
                <tbody><td >Wins 0</td><td>{score?.O || 0}</td></tbody>
                <tbody><td>Draws</td><td>{score?.draw || 0}</td></tbody>
            </table>

        </div>
    );
}

export default ScoreBoard;