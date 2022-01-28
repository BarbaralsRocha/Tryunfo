import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: '',
      trunfo: false,
      arrayObj: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    const { name,
      description, attr1, attr2,
      attr3, image, rare, trunfo,
      arrayObj } = this.state;
    const obj = {
      cardName: name,
      cardDescription: description,
      cardAttr1: attr1,
      cardAttr2: attr2,
      cardAttr3: attr3,
      cardImage: image,
      cardRare: rare,
      cardTrunfo: trunfo,
    };

    return this.setState(({
      arrayObj: [...arrayObj, obj],
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: '',
      trunfo: false,
    }));
  };

  render() {
    const { name, description, attr1,
      attr2, attr3, image, rare, trunfo } = this.state;
    const maxNumber = (atributo) => {
      const maxCards = 90;
      if (atributo <= maxCards && atributo >= 0) return atributo;
    };

    const buttonFunc = () => {
      const firstCond = [name, description, image, rare];
      const secondCond = [Number(attr1), Number(attr2), Number(attr3)];
      const verifyButton1 = firstCond.every((condition) => condition.length !== 0);
      const verifyButton2 = secondCond.reduce((valor, acc) => valor + acc, 0);
      const maxSumNumber = 210;
      const button = !(verifyButton1 && verifyButton2 <= maxSumNumber
        && maxNumber(attr1) && maxNumber(attr2) && maxNumber(attr3));
      return button;
    };

    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          // hasTrunfo={ hasTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ buttonFunc() }
          onSaveButtonClick={ this.handleButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </main>
    );
  }
}

export default App;
