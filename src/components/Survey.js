import React from 'react';
import { Panel } from 'react-bootstrap';

import QuestionView from './QuestionView';
import AddNewQuestion from './AddNewQuestion';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // surveyTitle: ...
      // createdBy: ...
      // 
    };
  }
  render() {
    return (
      <Panel bsStyle='info'>
        <QuestionView question="how?"/>
        <AddNewQuestion />
      </Panel>
    );
  }
}

export default Survey;