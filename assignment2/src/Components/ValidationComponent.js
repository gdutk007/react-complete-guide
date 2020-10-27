import React from 'react'


const ValidationComponent = (props) => {

    let message = <h1> Text is too short... </h1>;
    if(props.count > 20){
        message = <h1> Text is too Long... </h1>;
    }
    return(
        <div>  
          {message}  
        </div>
    );
}


export default ValidationComponent;