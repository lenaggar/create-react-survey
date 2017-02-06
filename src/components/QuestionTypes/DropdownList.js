import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Col } from 'react-bootstrap';

import FormSubmit from './FormSubmit';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: 'dropdown-list',
      question: '',
      optionsAllowed: true,
      options: [],
      questionValidity: null,
      answerValidity: null,
      checkbox: true,
      popoverVisible: false,
      popoverMessage: '',
    };
  }

  validateQuestionOnChange() {
    const question = document.querySelector('#dropdown-list-question').value;
    const len = question.length;
    if(len < 1) {
      this.setState({
        question: '',
        questionValidity: 'error',
      });
      return;
    } else {
      let validQuestion = question.charAt(0).toUpperCase() + question.substr(1);
      if(validQuestion.charAt(len - 1) === '?') {
        this.setState({
          question: validQuestion,
          questionValidity: 'success',
        });
        return;
      } else {
        this.setState({
          question: validQuestion + '?',
          questionValidity: 'success',
        });
        return;
      }
    }
  }

  validateAnswersOnChange() {
    const answers = document.querySelector('#dropdown-list-answer').value
      .split(',')
      .map(option => option.trim())
      .filter(a => a);
    const len = answers.length;
    if(len < 2) {
      this.setState({
        options: answers,
        answerValidity: 'error',
      });
      return;
    } else {
      this.setState({
        options: answers,
        answerValidity: 'success',
      });
      return;
    }
  }

  toggleSortOptions() {
    this.setState({ checkbox: !this.state.checkbox });
  }

  setPopoverMessage() {
    if(!this.state.questionValidity)
      this.validateQuestionOnChange();
    if(!this.state.answerValidity)
      this.validateAnswersOnChange();

    const questionValidity = this.state.questionValidity;
    const answerValidity = this.state.answerValidity;
    
    if(questionValidity === 'error' && answerValidity === 'error')
      this.setState({
        popoverMessage: 'Invalid question and options!',
        popoverVisible: true
      });
    else if (questionValidity === 'error')
      this.setState({
        popoverMessage: 'Invalid question!',
        popoverVisible: true
      });
    else if (answerValidity === 'error')
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
    this.setPopoverMessage();
    
    if(this.state.popoverVisible)
      return;

    // process question befor submitting
    if(this.state.checkbox) {
      const optionsArr = this.state.options;
      optionsArr.sort();
      this.setState({
        options: optionsArr
      });
    }

    // create question
    // ...
  }
  
  render() {
    return (
      <Form horizontal>

        <FormGroup controlId="dropdown-list-question" validationState={this.state.questionValidity}>
          <Col sm={2}>
            <ControlLabel>Question:</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Enter text" onChange={this.validateQuestionOnChange.bind(this)}></FormControl>
          </Col>
        </FormGroup>

        <FormGroup controlId="dropdown-list-answer" validationState={this.state.answerValidity}>
          <Col sm={2}>
            <ControlLabel>Options:</ControlLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Enter text" onChange={this.validateAnswersOnChange.bind(this)}></FormControl>
          </Col>
          <Col smOffset={2} sm={10}>
            <HelpBlock>Note: entered options should be separated by <strong>commas</strong>! e.g.:(Red, Green, Yellow...)</HelpBlock>
          </Col>
        </FormGroup>

        <FormGroup controlId="dropdown-list-answer-order">
          <Col smOffset={2} sm={10}>
            <Checkbox checked={this.state.checkbox} onChange={this.toggleSortOptions.bind(this)}>Sort options</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup controlId="dropdown-list-submit">
          <Col smOffset={2} sm={10}>
            <FormSubmit show={this.state.popoverVisible} message={this.state.popoverMessage} handleClick={this.submitForm.bind(this)}/>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

export default DropdownList;