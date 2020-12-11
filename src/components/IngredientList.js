import React, { Component } from 'react';

class IngredientList extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let allIngredients = this.props.ingredients.name;
    return (
      <div>
        <ul>{allIngredients}</ul>
      </div>
    )
  }
}

export default IngredientList;
