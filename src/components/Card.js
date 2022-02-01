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
        <h1 id="card-name" data-testid="name-card">{cardName}</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p className="infocard" data-testid="description-card">{cardDescription}</p>
        <div id="card-atributos">
          <div className="atributos">
            <p>Atributo 1:</p>
            <p className="infocard" data-testid="attr1-card">{cardAttr1}</p>
          </div>
          <div className="atributos">
            <p>Atributo 2:</p>
            <p className="infocard" data-testid="attr2-card">{cardAttr2}</p>
          </div>
          <div className="atributos">
            <p>Atributo 3:</p>
            <p className="infocard" data-testid="attr3-card">{cardAttr3}</p>
          </div>
        </div>
        <p>Raridade:</p>
        <p className="infocard" data-testid="rare-card">{cardRare}</p>
        <p>Super Trunfo?</p>
        {cardTrunfo && <p className="infocard" data-testid="trunfo-card">Super Trunfo</p>}
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
