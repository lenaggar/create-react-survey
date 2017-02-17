import React from 'react';
import { Modal } from 'react-bootstrap';

import QuestionType from './QuestionType';

const QuestionOverlay = (props) => (
  <Modal show={props.show} onHide={props.closeModal}  aria-labelledby="contained-modal-title-lg">
    <Modal.Body>
      <QuestionType type={props.questionType} insertQuestion={props.insertQuestion} closeModal={props.closeModal} mode={props.mode}/>
    </Modal.Body>
  </Modal>
);

QuestionOverlay.propTypes = {
  insertQuestion: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool.isRequired,
  questionType: React.PropTypes.string.isRequired,
  mode: React.PropTypes.string.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default QuestionOverlay;