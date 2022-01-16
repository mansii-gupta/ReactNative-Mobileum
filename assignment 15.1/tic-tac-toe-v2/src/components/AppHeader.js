import React from 'react';
import Clock from './Clock'

const AppHeader = (props) => {


    return <header>
        <div className='column-layout'>
            <h1 className='site-title'>{props.title}</h1>
            <Clock />
        </div>

    </header>;
}

export default AppHeader;

