import React from 'react'
import style from  './BurgerIngredient.module.css'



const BurgerIngredient = (props) => {
    
    let ingredient = null;
    
    console.log(props.type)

    switch(props.type){
        case('breadtop'):
            ingredient = <div className={style.BreadTop}> testing</div>
        break;
        case('breadbottom'):
            ingredient = <div className={style.BreadBottom}> testing</div>
        break;
        case('seeds1'):
            ingredient = <div className={style.seeds1}> testing</div>
        break;
        case('seeds2'):
            ingredient = <div className={style.seeds2}> testing</div>
        break;
        case('meat'):
            ingredient = <div className={style.Meat}> testing</div>
        break;
        case('cheese'):
            ingredient = <div className={style.Cheese}> testing</div>
        break;
        case('salad'):
        ingredient = <div className={style.Salad}> testing</div>
        break;
        case('bacon'):
            ingredient = <div className={style.Bacon}> testing</div>
        break;
        default:
        console.log("something is not right!")
        break;
    }

    return (
        <div>
            {ingredient}
        </div>
    );
}

export default BurgerIngredient;