import React from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';

import QuestionsViewArea from './QuestionsViewArea';
import QuestionOverlay from './QuestionOverlay';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyTitle: '...',
      surveyDescription: '...',
      createdBy: '...',
      createdOn: '...',
      category: '...',
      endDate: '...',
      questions: [],
      overlayShow: false,
      overlayMode: '',
      overlayQuestionType: '',
    };
  }

  insertQuestion(obj) {
    let qArr = this.state.questions;
    qArr.push(obj);
    this.setState({ questions: qArr });
  }

  openQuestionOverlay(type) {
    this.setState({
      overlayShow: true,
      overlayQuestionType: type
    });
  }

  closeQuestionOverlay() {
    this.setState({
      overlayShow: false,
    });
  }

  render() {
    return (
      <div>

        <QuestionsViewArea questions={this.state.questions}/>
        
        <DropdownButton bsStyle='default' title='Add new Question' id="dropdown-basic">
          <MenuItem eventKey="1" onClick={(() => this.openQuestionOverlay('multiple-choice')).bind(this)}>Multiple choice</MenuItem>
          <MenuItem eventKey="2" onClick={(() => this.openQuestionOverlay('checkboxes')).bind(this)}>Checkboxes</MenuItem>
          <MenuItem eventKey="3" onClick={(() => this.openQuestionOverlay('dropdown-list')).bind(this)}>Dropdown</MenuItem>
          <MenuItem eventKey="4" onClick={(() => this.openQuestionOverlay('short-answer')).bind(this)}>Short answer</MenuItem>
          <MenuItem eventKey="5" onClick={(() => this.openQuestionOverlay('paragraph')).bind(this)}>Paragraph</MenuItem>
          <MenuItem eventKey="6" onClick={(() => this.openQuestionOverlay('linear-scale')).bind(this)}>Linear scale</MenuItem>
          <MenuItem eventKey="7" onClick={(() => this.openQuestionOverlay('date')).bind(this)}>Date</MenuItem>
        </DropdownButton>

        <QuestionOverlay
          show={this.state.overlayShow}
          questionType={this.state.overlayQuestionType}
          mode={this.state.overlayMode}
          closeModal={this.closeQuestionOverlay.bind(this)}
          insertQuestion={this.insertQuestion.bind(this)}
        />

      </div>
    );
  }
}

export default Survey;