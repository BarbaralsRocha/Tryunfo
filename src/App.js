import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
state = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  rare: 'normal',
  trunfo: false,
  hasTrunfo: false,
  arrayObj: [],
  search: '',
  filterRare: 'todas',
  trunfoCard: false,
};

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleButtonClick = (event) => {
    event.preventDefault(); // não atualiza a pagina apos clicar em 'salvar'
    const { name,
      description, attr1, attr2,
      attr3, image, rare, trunfo,
      arrayObj } = this.state;
    const obj = { // criando o array de objs que ficará salvo o estado dos cards
      cardName: name,
      cardDescription: description,
      cardAttr1: attr1,
      cardAttr2: attr2,
      cardAttr3: attr3,
      cardImage: image,
      cardRare: rare,
      cardTrunfo: trunfo,
    };

    if (trunfo) { // faz a verificação se a opção super trunfo foi marcada
      this.setState({
        hasTrunfo: true,
      });
    }
    return this.setState(({
      arrayObj: [...arrayObj, obj], // retorna o novo array de objetos com os objetos que ja haviam sido passados
      name: '', // retorna ao estado normal das propriedades
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
    }));
  };

  card = (obj, name) => {
    const { arrayObj } = this.state;
    this.setState({ arrayObj: arrayObj.filter((newArr) => newArr !== obj) }); // se clicar no botao de remover a carta, retornará um novo array, sem o objeto da carta clicado
    if (arrayObj.map((newArr) => newArr.cardTrunfo === true)) { // verifica se tem a carta excluida é um super trunfo
      this.setState({
        hasTrunfo: false,
      });
    }
    let div = document.getElementById(`${name}`).innerText; // remove a div da carta da tela
    div = '';
    return div;
  }

  render() {
    const { name, description, attr1,
      attr2, attr3, image, rare, trunfo, hasTrunfo, arrayObj,
      search, filterRare, trunfoCard } = this.state;
    const maxNumber = (atributo) => { // verifica a condição de que cada carta nao pode ser maior que 90 nem negativa
      const maxCards = 90;
      if (atributo <= maxCards && atributo >= 0) return atributo;
    };

    const buttonFunc = () => {
      const firstCond = [name, description, image, rare];
      const secondCond = [Number(attr1), Number(attr2), Number(attr3)];
      const verifyButton1 = firstCond.every((condition) => condition.length !== 0); // avarialá a primeira condição em que nome, descrição, imagem e raridade nao podem estar vazias
      const verifyButton2 = secondCond.reduce((valor, acc) => valor + acc, 0); // somatorio dos atributos
      const maxSumNumber = 210;
      const button = !(verifyButton1 && verifyButton2 <= maxSumNumber
        && maxNumber(attr1) && maxNumber(attr2) && maxNumber(attr3)); // nega todas as condicoes que estariam verdadeiras
      return button; // ativa o botão
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
          hasTrunfo={ hasTrunfo }
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
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          value={ search }
          onChange={ this.handleChange }
          disabled={ trunfoCard }
        />
        <select
          data-testid="rare-filter"
          name="filterRare"
          id="filterRare"
          onChange={ this.handleChange }
          value={ filterRare }
          disabled={ trunfoCard }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="superTrunfo">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-filter"
            name="trunfoCard"
            onChange={ this.handleChange }
            checked={ trunfoCard }
            type="checkbox"
          />
        </label>
        {
          arrayObj
            .filter((nameCard) => (
              (trunfoCard === false)
                && (nameCard.cardName.includes(search))
                && (filterRare === 'todas' || nameCard.cardRare === filterRare)
            )
            || (trunfoCard === true && nameCard.cardTrunfo === true))
            .map((obj) => (
              <div id={ obj.cardName } className="cards" key={ obj.cardName }>
                <Card
                  cardName={ obj.cardName }
                  cardDescription={ obj.cardDescription }
                  cardAttr1={ obj.cardAttr1 }
                  cardAttr2={ obj.cardAttr2 }
                  cardAttr3={ obj.cardAttr3 }
                  cardImage={ obj.cardImage }
                  cardRare={ obj.cardRare }
                  cardTrunfo={ obj.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  type="submit"
                  onClick={ () => this.card(obj, obj.cardName) }
                >
                  Excluir
                </button>
              </div>
            ))
        }
      </main>
    );
  }
}

export default App;
