import React from "react";

class InputErrorMessage extends React.Component {
  render() {
    return(
      <React.Fragment>
        {this.props.message &&
          <p className="error-message">
            {this.props.message}
          </p>
        }
      </React.Fragment>
    )
  }
}

export default InputErrorMessage;