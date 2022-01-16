import React from 'react';
import If from './If';

class Stopwatch extends React.Component {

    constructor(props){
        super(props);

        this.state={
            cs:0, //1/100 of  a second;
            player:this.props.player,
            restart:this.props.restart,
            over:this.props.result.over,
            flag:0,
        }
    }

   static getDerivedStateFromProps(newProps,newState){
        if(newProps.restart && newState.flag==0){
            console.log("restart", newProps.restart, newProps.label, newState.flag)
            return {cs: 0, player:newProps.player, flag:1, over:newProps.result.over};
        }
        else if(newProps.player!==newState.player){
            //player value toggled recently in props
            //update the state based on the prop
            // if(newProps.result.over){
            //     console.log("over", newProps.label)
            //     newProps.drawWinner(newState.cs, newProps.label);
            // }
            return {player:newProps.player, over:newProps.result.over, flag:0};
        }
        else{
            return null;
        }
   }
   
    componentDidMount(){
        this.id=setInterval(() =>{
            if(this.state.over){
                
                this.setState({cs: this.state.cs});
            }
            else if(this.state.player ){

                this.setState({cs: this.state.cs+1});
            }
        },10);
    }

    componentWillUnmount(){

        if(this.id)

            clearInterval(this.id);

        this.id=null;

    }

    getTime(){
        let result={}; 
        let cs=this.state.cs; //13550
       
        let seconds= Math.floor(cs/100); //135
        let min=Math.floor(seconds/60); //2
        seconds-= min*60;  //15
        
        const twoDigit=(value)=>{
            if(value>9)
                return value;
            else
                return "0"+value;
        }

        return {
            cs:twoDigit(cs%100),
            seconds:twoDigit(seconds),
            min:twoDigit(min)
        }

        
    }

    reset=()=>{
        this.setState({cs:0, player:false});
    }

    toggleState=()=>{
        console.log('toggleing state...');
        this.setState({player: !this.state.player})
    }

    render(){
        // console.log("mould", this.state.player, this.state.over, this.state.running)
      const {cs,seconds,min}=this.getTime();
      return (
            <div className='stop-watch'>
                <p>{this.props.label}</p>
                <p className='stop-watch-time'>
                    <span className='stop-watch-min'>
                        {min}:
                    </span>
                    <span className='stop-watch-second'>
                        {seconds}
                    </span>
                </p>     
          </div> );
    
    }

}
export default Stopwatch; 