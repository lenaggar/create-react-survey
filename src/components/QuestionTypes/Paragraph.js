import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Form>
        <FormGroup controlId="text-area-question">
          <ControlLabel>Type your question</ControlLabel>
          <FormControl type="text" placeholder="Enter text"></FormControl>
        </FormGroup>
        <FormGroup controlId="text-area-answer">
          <ControlLabel>Answer</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Answer goes here" disabled></FormControl>
        </FormGroup>
        <Button>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Paragraph;