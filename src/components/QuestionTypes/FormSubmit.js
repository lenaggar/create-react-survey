import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Popover, Overlay } from 'react-bootstrap';

class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      message: '',
      handleClick: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      message: nextProps.message,
      handleClick: nextProps.handleClick,
    });
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Button bsStyle="primary" ref="target" onClick={this.state.handleClick}>Submit</Button>
        <Overlay show={this.state.show} container={this} target={() => ReactDOM.findDOMNode(this.refs.target)} placement="right">
          <Popover id="popover-trigger-click-root-close" title="Error!">
            <h4>{this.state.message}</h4>
          </Popover>
        </Overlay>
      </div>
    );
  }
}

FormSubmit.propTypes = {
  show: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};

export default FormSubmit;