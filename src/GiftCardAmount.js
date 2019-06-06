import React from "react";

class GiftCardAmount extends React.Component {
  render() {
    return(
      <React.Fragment>
        <input
          id={`gift-card-amount__${this.props.amount}`}
          type="radio"
          name="amount"
          value={this.props.amount}
          onChange={this.props.setAmount}
        />

        <label htmlFor={`gift-card-amount__${this.props.amount}`}>
          ${this.props.amount}
        </label>
      </React.Fragment>
    )
  }
}

export default GiftCardAmount;