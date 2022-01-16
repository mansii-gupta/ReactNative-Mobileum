import React from 'react';

const MovesBoard = ({ moves }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;#&nbsp;</th>
                        <th>&nbsp;Player&nbsp;</th>
                        <th>&nbsp;Position&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {moves.map((move, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{move.player}</td>
                            <td>{move.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovesBoard;