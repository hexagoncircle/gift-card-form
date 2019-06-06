import React from "react";

class GiftCardAmountCustom extends React.Component {
  render() {
    return(
      <div className={`input-group${this.props.error ? ' has-error' : ''}`}>
        <label htmlFor="gift-card-amount__custom">$</label>

        <input
          id="gift-card-amount__custom"
          type="number"
          autoComplete="off"
          placeholder="Other"
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

export default GiftCardAmountCustom;