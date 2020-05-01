import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: parseInt(event.target.alcoholContent.value), ibu: parseInt(event.target.ibu.value), price: parseInt(event.target.price.value), pintQuantity: 124, id: v4()});
  }

  const newKegFormStyles = {
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }

  return (
    <div style={newKegFormStyles}>
      <Form onSubmit={handleNewKegFormSubmission}>
        <Form.Group>
          <Form.Control type='text' name='name' placeholder='brew name' required />
        </Form.Group>
        <Form.Group>
          <Form.Control type='text' name='brewery' placeholder='brewery' required/>
        </Form.Group>
        <Form.Group>
          <Form.Control type='number' name='alcoholContent' placeholder='ABV' required />
        </Form.Group>
        <Form.Group>
          <Form.Control type='number' name='ibu' placeholder='IBU' required />
        </Form.Group>
        <Form.Group>
          <Form.Control type='number' name='price' placeholder='price' required />
        </Form.Group>
        <Button className="new-keg-button" type="submit">ADD KEG</Button>
      </Form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;