import React from 'react'
import './../css/styles.css'

const CharComponent = (props) => {
    return(
        <div  onClick={props.click} className="charcomponent">
            <h1> {props.letter} </h1>
        </div>
    );
}


export default CharComponent;