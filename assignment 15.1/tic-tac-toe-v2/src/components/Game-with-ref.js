import React from 'react';
import Status from './Status';
import Board from './Board';
import {checkGame} from '../services/TicTacToe.js'
import If from './If.js';
import MovesBoard from './MovesBoard';
import Stopwatch from './Stopwatch';


class Game extends React.Component {

    constructor(props){
        super(props);

        this.state=this.getInitialState();
        this.oTimerRef=React.createRef();
        this.xTimerRef=React.createRef();

    }

    handleCellClick=(id)=>{

        if(!this.state.running){
            return alert('Game is not running. Hit Start');
        }

        console.log('cell',id,'clicked');
        //never change original value directly
        //always work on a duplicate
        const cells= [...this.state.cells];
        // if(cells[id]!=='  ')
        //     return ; //this value had  earlier.
        
        cells[id]=this.state.next;
        let newResult= checkGame(cells);
        
        if(newResult.over){

            if(!newResult.winner){
                //statlemate
                if(this.oTimerRef.current.state.cs<this.xTimerRef.current.state.cs){
                    newResult.winner="O";
                } else if(this.oTimerRef.current.state.cs>this.xTimerRef.current.state.cs){
                    newResult.winner="X";
                }
            }
            this.props.onGameOver(newResult); //inform app game is over.
            //stop the last running watch
            this.toggleWatches(this.state.next);
        } else {
            this.toggleWatches();
        }

        this.setState({result:newResult});

        const move={player:this.state.next, position:id+1};

        const moves=[...this.state.moves,move];
        this.setState({moves});
       
        const next=this.state.next==='O'?'X':'O';
        
        
        //update the state
        this.setState({cells,next});
       // console.log('cell clicked', id);
    }

    getInitialState=(running=false, next='-')=>{
        const s={

            cells:[  '  ','  ','  ',
                    '  ','  ','  ',
                    '  ','  ','  '
                ],
            next:next,
            moves:[ ],  //{player:'O', position:2}
            running:running

        }
        s.result=checkGame(s.cells); 
        //default result {over:false, movesLeft:9, winner:null, winningSequence:null}

        return s;

    }

    toggleWatches=(id)=>{

        
        if(id){
            if(id==='O')
                this.oTimerRef.current.toggleState();
            else
                this.xTimerRef.current.toggleState();
        } else{
            this.oTimerRef.current.toggleState();
            this.xTimerRef.current.toggleState();
        }
    }
    

    handleStart=(id)=>{
        let next=this.state.next==='O'?'X':'O';
        if(this.state.result.over || this.state.result.movesLeft===9){
         
            this.setState(this.getInitialState(true,next));
            this.xTimerRef.current.reset();
            this.oTimerRef.current.reset();   
            this.toggleWatches(next);

        }

    }


    render=()=>{


        return (
                <div className='game'>
                    
                    <div className='column-layout game-header'>
                    <Stopwatch ref={this.oTimerRef} label="O" />
                    <Status result={this.state.result} next={this.state.next} />
                    <Stopwatch ref={this.xTimerRef} label="X" />

                    </div>
                    <div className="column-layout">
                        <Board cells={this.state.cells} 
                                onCellClick={this.handleCellClick}/>

                        <MovesBoard moves={this.state.moves}/>
                    </div>
                    <div>
                       
                    
                    </div>
                    
                    <If condition={this.state.result.over||this.state.result.movesLeft===9} >
                        <button
                        className="reset-button"
                        onClick={this.handleStart}
                        >New Game</button>  
                    </If>

                   
                    
                </div>
                );
                
    }

}





export default Game;