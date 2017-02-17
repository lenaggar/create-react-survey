import React from 'react';

import DropdownListView from './QuestionTypes/DropdownListView';

const QuestionsViewArea = (props) => {
  let qArr;
  if(props.questions.length < 1)
    qArr = [{
      questionType: 'dropdown-list',
      question: 'What is your favorite number?',
      optionsAllowed: true,
      options: [1, 2, 3, 4, 5, 6],
    },
    {
      questionType: 'dropdown-list',
      question: 'What is your favorite word?',
      optionsAllowed: true,
      options: [1, 4, 7, 8, 9, 6, 5, 2, 3],
    }];
  else
    qArr = props.questions;
  
  return (
    <div>
      {
        qArr.map((q, i) => {
          switch(q.questionType) {
          case 'this.state.questionType':
            return <div>{q.questionType}</div>;
          case 'dropdown-list':
            return <DropdownListView {...q} key={i} index={i}/>;
          }
        })
      }
    </div>
  );
};

QuestionsViewArea.propTypes = {
  questions: React.PropTypes.array.isRequired,
};

export default QuestionsViewArea;