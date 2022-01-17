import React from 'react';
import TitleButton from './TitleButton'

class BookListComponent extends React.Component{
    
    //TODO: Initialize Here

    render=()=>{
        return (
            <div className='BookListScreen'>
                <div className="list-group">
                    {this.props.books.map((book,index)=>(    
                       <TitleButton key={book.isbn} index={index} title={book.title} onButtonClick={this.props.onButtonClick}/> 
                    ))}
                </div>

            </div>
        );
    }
}

export default BookListComponent;
