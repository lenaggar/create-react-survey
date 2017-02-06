import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Form>
        <FormGroup controlId="textbox-question">
          <ControlLabel>Type your question</ControlLabel>
          <FormControl type="text" placeholder="Enter text"></FormControl>
        </FormGroup>
        <FormGroup controlId="textbox-answer">
          <ControlLabel>Answer</ControlLabel>
          <FormControl type="text" placeholder="Answer goes here" disabled></FormControl>
        </FormGroup>
        <Button>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Textbox;