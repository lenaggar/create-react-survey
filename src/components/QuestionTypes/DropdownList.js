import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox } from 'react-bootstrap';

import FormSubmit from './FormSubmit';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: 'dropdown-list',
      question: '',
      optionsAllowed: true,
      options: [],
      question1stBlur: false,
      questionValidity: null,
      answer1stBlur: false,
      answerValidity: null,
      checkbox: true,
      popoverVisible: false,
      popoverMessage: '',
    };
  }

  // handleQuestionOnBlur() {
  //   this.setState({
  //     question1stBlur: true
  //   });
  //   this.forceUpdate(() => {
  //     this.validateQuestionOnChange();
  //   });
  // }

  validateQuestionOnChange() {
    const q = document.querySelector('#dropdown-list-question').value;
    if(q.length < 1) {
      this.setState({
        question: '',
        questionValidity: 'error'
      });
      return;
    } else {
      const validQ = q.charAt(0).toUpperCase() + q.substr(1);
      this.setState({
        question: (validQ.charAt(q.length - 1) === '?') ? validQ : `${validQ}?`,
        questionValidity: 'success'
      });
    }
  }

  // handleAnswerOnBlur() {
  //   this.setState({
  //     answer1stBlur: true
  //   });
  //   this.forceUpdate(() => {
  //     this.validateAnswersOnChange();
  //   });
  // }

  validateAnswersOnChange() {
    const answers = document.querySelector('#dropdown-list-answer').value
      .split(',')
      .map(option => option.trim())
      .filter(a => a);
    this.setState({
      options: answers,
      answerValidity: (answers.length < 2) ? 'error' : 'success'
    });
  }

  toggleSortOptions() {
    this.setState({ checkbox: !this.state.checkbox });
  }

  setPopoverMessage() {
    if(!this.state.questionValidity)
      this.validateQuestionOnChange();
    if(!this.state.answerValidity)
      this.validateAnswersOnChange();

    const qValidity = this.state.questionValidity;
    const aValidity = this.state.answerValidity;
    
    if(qValidity === 'error' && aValidity === 'error')
      this.setState({
        popoverMessage: 'Invalid question and options!',
        popoverVisible: true
      });
    else if (qValidity === 'error')
      this.setState({
        popoverMessage: 'Invalid question!',
        popoverVisible: true
      });
    else if (aValidity === 'error')
      this.setState({
        popoverMessage: 'Invalid options for this question type!',
        popoverVisible: true
      });
    else
      this.setState({
        popoverMessage: '',
        popoverVisible: false
      });
  }

  submitForm() {
    // validate form and set the Validation State
    this.setPopoverMessage();
    
    // update the state and re-render the component
    // and "then" check if it is valid
    this.forceUpdate(() => {      
      if(this.state.questionValidity !== 'success' || this.state.answerValidity !== 'success')
        return;

      // process question befor submitting
      if(this.state.checkbox) {
        const sortedArr = this.state.options.sort();
        this.setState({
          options: sortedArr
        });
      }

      // create question
      let qObj = {
        questionType: this.state.questionType,
        question: this.state.question,
        optionsAllowed: this.state.optionsAllowed,
        options: this.state.options,
      };

      // send qustion schema to survey component through props
      this.props.insertQuestion(qObj);
      this.props.closeModal();
      return;
    });

  }
  
  render() {
    return (
      <Form>

        <FormGroup controlId="dropdown-list-question" validationState={this.state.questionValidity}>
          <ControlLabel>Question:</ControlLabel>
          <FormControl type="text" placeholder="Enter text" onBlur={this.validateQuestionOnChange.bind(this)}></FormControl>
        </FormGroup>

        <FormGroup controlId="dropdown-list-answer" validationState={this.state.answerValidity}>
          <ControlLabel>Options:</ControlLabel>
          <FormControl type="text" placeholder="Enter text" onBlur={this.validateAnswersOnChange.bind(this)}></FormControl>
          <HelpBlock>Note: entered options should be separated by <strong>commas</strong>! e.g.:(Red, Green, Yellow...)</HelpBlock>
        </FormGroup>

        <FormGroup controlId="dropdown-list-answer-order">
          <Checkbox checked={this.state.checkbox} onChange={this.toggleSortOptions.bind(this)}>Sort Options</Checkbox>
        </FormGroup>

        <FormGroup controlId="dropdown-list-submit">
          <FormSubmit show={this.state.popoverVisible} message={this.state.popoverMessage} handleClick={this.submitForm.bind(this)}/>
        </FormGroup>

      </Form>
    );
  }
}

DropdownList.propTypes = {
  insertQuestion: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default DropdownList;