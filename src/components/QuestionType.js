import React from 'react';

import Checkbox from './QuestionTypes/Checkbox';
import Radio from './QuestionTypes/Radio';
import Textbox from './QuestionTypes/Textbox';
import TextArea from './QuestionTypes/TextArea';
import DropdownList from './QuestionTypes/DropdownList';

const QuestionType = (props) => {
  switch(props.type) {
  case 1:
    return <Checkbox />;
  case 2:
    return <Radio />;
  case 3:
    return <Textbox />;
  case 4:
    return <TextArea />;
  case 5:
    return <DropdownList />;
  }
};

QuestionType.propTypes = {
  type: React.PropTypes.number.isRequired
};

export default QuestionType;