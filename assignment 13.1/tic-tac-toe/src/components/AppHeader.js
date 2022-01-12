import React from 'react';

const AppHeader=(props)=>{


    return <header>
                <h1 className='site-title'>{props.title}</h1>
            </header>;
}

export default AppHeader;

