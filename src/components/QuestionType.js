import React from 'react';

import Checkboxs from './QuestionTypes/Checkboxs';
import MutipleChoice from './QuestionTypes/MutipleChoice';
import ShortAnswer from './QuestionTypes/ShortAnswer';
import Paragraph from './QuestionTypes/Paragraph';
import DropdownList from './QuestionTypes/DropdownList';
import LinearScale from './QuestionTypes/LinearScale';
import DatePicker from './QuestionTypes/DatePicker';

const QuestionType = (props) => {
  const qProps = {
    insertQuestion: props.insertQuestion,
    closeModal: props.closeModal,
    mode: props.mode,
  };
  switch(props.type) {
  case 'checkboxes':
    return <Checkboxs {...qProps}/>;
  case 'multiple-choice':
    return <MutipleChoice {...qProps}/>;
  case 'short-answer':
    return <ShortAnswer {...qProps}/>;
  case 'paragraph':
    return <Paragraph {...qProps}/>;
  case 'dropdown-list':
    return <DropdownList {...qProps}/>;
  case 'linear-scale':
    return <LinearScale {...qProps}/>;
  case 'date':
    return <DatePicker {...qProps}/>;
  }
};

QuestionType.propTypes = {
  type: React.PropTypes.string.isRequired,
  insertQuestion: React.PropTypes.func.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  mode: React.PropTypes.string.isRequired,
};

export default QuestionType;