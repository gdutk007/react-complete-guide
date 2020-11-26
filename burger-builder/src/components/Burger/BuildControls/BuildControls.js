import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css'


const controls = [
    {label: 'Salad' ,  type: 'salad'},
    {label: 'Meat' ,   type: 'meat'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Bacon' ,  type: 'bacon'},
]


const BuildControls = (props) =>{
 
let jsxcontrols = controls.map((el,index)=>{
    return <BuildControl 
    key={el.label+index}
    control={el}
    add={props.add}
    less={props.less} />
})

 return (
     <div className={styles.BuildControls}>
         <h2>  {props.price} </h2>
         {jsxcontrols}
     </div>
 )
}

 export default BuildControls;