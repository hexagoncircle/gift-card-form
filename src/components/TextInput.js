import React from "react";
import InputErrorMessage from "./InputErrorMessage";

class Input extends React.Component {
  render() {
    return(
      <div className={`input-wrapper${this.props.error ? ' has-error' : ''}`}>
        <label htmlFor={this.props.id}>{this.props.label}</label>

        <input
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />

        <InputErrorMessage message={this.props.error} />
      </div>
    )
  }
}

export default Input;