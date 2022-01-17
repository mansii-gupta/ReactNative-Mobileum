import React from 'react';

const TitleButton = ({index,title,onButtonClick})=>{
    
    let style={
        backgroundColor:"$primary_color",
    }
    const showDetails=()=>{
        console.log("button ",index," clicked");
        //style.backgroundColor="LightGreen";
        onButtonClick(index);
    }

    return (
        <button className="list-group-item list-group-item-action" style={style} onClick={showDetails}>  
            {title}
        </button>
    )
}

export default TitleButton;