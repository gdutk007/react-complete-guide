import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const prices = {
    salad:  0.2, 
    bacon:  0.7,
    cheese: 1.3,
    meat:   1.5
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0, 
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3
    }

    AddIngredientHandler = (type) =>{
        //console.log("the type is " + type)
        const currentCount = this.state.ingredients[type];
        const newCount = currentCount+1;
        let newingredients = {...this.state.ingredients};
        newingredients[type] = newCount;
        // prices
        const currPrice = this.state.totalPrice;
        const newPrice = currPrice + newCount*prices[type];
        let newTotal = {...this.state.totalPrice}
        newTotal = newPrice;
        console.log("the new price is: " + newTotal)
        // changing the state
        this.setState( {ingredients: newingredients,totalPrice: newTotal} )
    }

    RemoveIngredientHandler = (type) =>{
        const currentCount = this.state.ingredients[type];
        if(currentCount <= 0){
            return;
        }
        const newCount = currentCount-1;
        let newingredients = {...this.state.ingredients};
        newingredients[type] = newCount;
        // prices
        const currP = this.state.totalPrice;
        const newP = currP - (currentCount*prices[type] - newCount*prices[type]);
        let newTotal = {...this.state.totalPrice}
        newTotal = newP;
        console.log("The value " +newCount*prices[type]);
        console.log("the new price is: " + newP)
        this.setState( {ingredients: newingredients, totalPrice: newTotal} )        
    }

    render(){
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
                <BuildControls 
                  price={this.state.totalPrice}
                  less={this.RemoveIngredientHandler}
                  add={this.AddIngredientHandler} />
            </React.Fragment>
        );
    }
}
export default BurgerBuilder;