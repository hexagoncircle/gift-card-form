import React from "react";

class InputErrorMessage extends React.Component {
  render() {
    return(
      <React.Fragment>
        {this.props.message &&
          <span className="error-message">
            {this.props.message}
          </span>
        }
      </React.Fragment>
    )
  }
}

export default InputErrorMessage;