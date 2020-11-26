import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props)=>{
    return (
        <div className={classes.BuildControl} >
            <div className={classes.label}>{props.control.label}</div>
            <button className={classes.Less} onClick={()=>props.less(props.control.type)} > Less </button>
            <button className={classes.More} onClick={()=>props.add(props.control.type)} > More </button>
        </div>
    )
}

export default BuildControl;