import React from 'react';
import Clock from '../components/Clock'

const HomeScreen = ({ }) => {
    return (
        <div>
            <div className='HomeScreen'>
                <Clock />
                <div className='Welcome'>
                    Welcome to our Book Store
                </div>
                <div className='Nice'>
                    It's nice to meet you !
                </div>
            </div>
            <div className='row'>
                <div className='col col-5'>
                    <div className='Image'>
                    </div>
                </div>
                <div className='col col-7'>
                    <div className='Quotes'>
                        Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book.
                        <br />
                        <div className='AuthorHome'>
                            - E B White
                        </div>
                    </div>
                </div>
            </div>

            <button className='Refresh'>
                Refresh
            </button>
        </div>


    );
}


export default HomeScreen;