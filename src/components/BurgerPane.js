// accepts the incoming burger choices
import React, { Component } from 'react';
import BurgerStack from './BurgerStack';

class BurgerPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      burgerItemsArray: this.props.ingredients.name,
    }
  }
// clears the ingredient list
  clearBurger = (e) => {
      this.setState({
        burgerItemsArray: []
      })
    }

  render() {
    let burgerItems = this.state.burgerItemsArray.map((item, index) => {
      <BurgerStack burgerItemsArray={item} key={index}/>
    })
    return (
      <div>
        <ul>{burgerItems}</ul>
      </div>
    )
  }
}

export default BurgerPane;
