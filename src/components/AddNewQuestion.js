import React from 'react';
import { Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import QuestionType from './QuestionType';

class AddNewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      key: 1
    };
  }

  close() { this.setState({ showModal: false }); }
  
  open(key) { this.setState({ showModal: true, key }); }

  render() {
    return (
      <div>
        <DropdownButton bsStyle='primary' title='Add new Question' id="dropdown-basic">
          <MenuItem eventKey="1" onClick={(() => this.open(1)).bind(this)}>Select Multiple from Few</MenuItem>
          <MenuItem eventKey="2" onClick={(() => this.open(2)).bind(this)}>Select One from Few</MenuItem>
          <MenuItem eventKey="3" onClick={(() => this.open(3)).bind(this)}>Text Field Single Line</MenuItem>
          <MenuItem eventKey="4" onClick={(() => this.open(4)).bind(this)}>Text Field Multiple Lines  </MenuItem>
          <MenuItem eventKey="5" onClick={(() => this.open(5)).bind(this)}>Dropdown List</MenuItem>
          <MenuItem eventKey="6" onClick={(() => this.open(6)).bind(this)}>Select Many from Many</MenuItem>
        </DropdownButton>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large" aria-labelledby="contained-modal-title-lg">

          <Modal.Header closeButton>
            New Question
          </Modal.Header>

          <Modal.Body>
            <QuestionType type={this.state.key}/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default AddNewQuestion;