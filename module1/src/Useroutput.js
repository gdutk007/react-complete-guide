import  React, { Component } from 'react';
import './css/Useroutcss.css';


const Useroutput = (props) => { 
    return (
        <div className="Useroutput">
            <ul >
            <p > This is some text that goes here. 
                This is actually taking way longer
                than I thought...
            </p>
            <p> This is some text that goes here. 
                This is actually taking way longer
                than I thought...
            </p>
            <p>
                By the way the username is {props.Username}
            </p>

            </ul>
        </div>
    );
}




export default Useroutput;


