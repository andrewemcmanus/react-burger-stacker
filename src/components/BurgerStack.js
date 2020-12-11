import React, { Component } from 'react';

class BurgerStack extends Component {

  render() {
    return (
      <div>
        <ul>{this.props.burgerItemsArray}</ul>
      </div>
    )
  }
}

export default BurgerStack;
