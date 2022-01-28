import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div id="card">
        <p>Nome:</p>
        <p data-testid="name-card">{cardName}</p>
        <p>Imagem:</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p>Descrição:</p>
        <p data-testid="description-card">{cardDescription}</p>
        <p>Atributo 1:</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p>Atributo 2:</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p>Atributo 3:</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p>Raridade:</p>
        <p data-testid="rare-card">{cardRare}</p>
        <p>Super Trunfo?</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
