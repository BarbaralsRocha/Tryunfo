import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form id="form">
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            name="name"
            onChange={ onInputChange }
            value={ cardName }
            type="text"
            required
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            name="description"
            onChange={ onInputChange }
            value={ cardDescription }
            type="textarea"
            required
          />
        </label>

        <label htmlFor="attr1">
          Attr01:
          <input
            data-testid="attr1-input"
            min="0"
            max="90"
            name="attr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
            type="number"
            required
          />
        </label>

        <label htmlFor="attr2">
          Attr02:
          <input
            data-testid="attr2-input"
            name="attr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
            type="number"
            required
          />
        </label>

        <label htmlFor="attr3">
          Attr03:
          <input
            data-testid="attr3-input"
            min="0"
            max="90"
            name="attr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
            type="number"
            required
          />
        </label>

        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            name="image"
            onChange={ onInputChange }
            value={ cardImage }
            type="text"
            required
          />
        </label>

        <label htmlFor="rare">
          Raridade:
          <select
            data-testid="rare-input"
            name="rare"
            onChange={ onInputChange }
            value={ cardRare }
            required
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            name="trunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
            type="checkbox"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
