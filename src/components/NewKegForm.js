import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='brew name' />
        <input
          type='text'
          name='brewery'
          placeholder='brewery name' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='ABV' />
        <input
          type='number'
          name='price'
          placeholder='price' />
        <button type="submit">ADD KEG</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;