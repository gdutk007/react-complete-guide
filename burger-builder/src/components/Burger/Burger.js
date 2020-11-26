import React from 'react'
import style from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    
    let ingredients = Object.keys(props.ingredients)
        .map(igkey=>{
            return [...Array(props.ingredients[igkey])].map((_,i)=>{
                return <BurgerIngredient key={igkey+i} type={igkey} />
            })
        }).reduce((arr,el)=>{
            return arr.concat(el)
        })
    console.log(ingredients)
    if(ingredients.length === 0){
        ingredients =<p>Please Select ingredients for your Burger...</p>
    }

    return(
        <div className={style.Burger}>
            <BurgerIngredient type='breadtop'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='salad'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='breadbottom'/>
            <hr/>
            <BurgerIngredient type='breadtop'/>
            {ingredients}
            <BurgerIngredient type='breadbottom'/>
        </div>
    );
}

export default Burger;