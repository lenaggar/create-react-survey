import React from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';

const DropdownListView = (props) => (
  <Panel header={props.question}>
    <DropdownButton bsStyle='primary' title='Select an option...' id='dropdown-basic'>
      {
        props.options.map((option, i) => (<MenuItem eventKey={i} key={i}>{option}</MenuItem>))
      }
    </DropdownButton>
  </Panel>
);

DropdownListView.propTypes = {
  questionType: React.PropTypes.string.isRequired,
  question: React.PropTypes.string.isRequired,
  optionsAllowed: React.PropTypes.bool.isRequired,
  options: React.PropTypes.array.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default DropdownListView;