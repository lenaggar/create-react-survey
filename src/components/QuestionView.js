import React from 'react';
import { Panel } from 'react-bootstrap';

const Question = (props) => (
  <Panel header={`Q: ${props.question}`}>
    Panel content
  </Panel>
);

Question.propTypes = {
  question: React.PropTypes.string.isRequired
};

export default Question;