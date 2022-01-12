import AppHeader from './components/AppHeader';
import Game from './components/Game';


const App=(props)=>{

    return (
        <div className='app'>
            <AppHeader title="Tic Tac Toe"/>
            <Game/>
        </div>
    )
};


export default App;

