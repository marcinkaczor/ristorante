import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

class Ingredient extends Component {

	render() {

		let ingredient = null;

		switch (this.props.type) {
			case ('cheddar'):
				ingredient = <Alert color="info">Cheddar</Alert>;
				break;
			case ('olive'):
				ingredient = <Alert color="info">Olive</Alert>;
				break;
			case ('parmezan'):
				ingredient = <Alert color="info">Parmezan</Alert>;
				break;
			case ('pomodoro'):
				ingredient = <Alert color="info">Pomodoro</Alert>;
				break;
			case ('prosciutto'):
				ingredient = <Alert color="info">Prosciutto</Alert>;
				break;
			case ('rucola'):
				ingredient = <Alert color="info">Rucola</Alert>;
				break;
			default:
				ingredient = null;
		}

    return ingredient;
    
	}
}

Ingredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default Ingredient;