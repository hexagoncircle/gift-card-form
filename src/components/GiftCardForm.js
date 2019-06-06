import React from 'react';
import GiftCardAmount from './GiftCardAmount';
import GiftCardAmountCustom from './GiftCardAmountCustom';
import InputErrorMessage from './InputErrorMessage';
import TextInput from './TextInput';
import { errorMessages } from '../data/errorMessages.json';

class GiftCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      fields: {},
      validate: false
    }

    this.timer = null;
    this.setAmount = this.setAmount.bind(this);
    this.setCustomAmount = this.setCustomAmount.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateFieldValues = this.updateFieldValues.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  clearCustomAmountInput() {
    document.getElementById('gift-card-amount__custom').value = '';
  }

  deselectRadioControls() {
    document.getElementsByName('amount').forEach(radio => {
      radio.checked = false;
    });
  }

  setAmount(e) {
    let fields = this.state.fields;
    let errors = this.state.errors;

    fields.amount = e.target.value;
    errors.amount = '';
    this.setState({ fields, errors });
    this.clearCustomAmountInput();
  }

  setCustomAmount(e) {
    let value = e.target.value;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.validateAmount(value), 500);

    if (value !== '') this.deselectRadioControls();
  }

  submitForm(e) {
    const fields = this.state.fields;

    e.preventDefault();

    this.setState({ validate: true }, () => {
      if (this.validateForm()) {
        alert(`A $${fields.amount} gift card for ${fields.recipientName} from ${fields.senderName} has been added to your cart.`);
        this.clearCustomAmountInput();
        this.deselectRadioControls();
        this.setState({ fields: {}, errors: {}, validate: false });
      }
    });
  }

  updateFieldValues(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;
    this.setState({ fields });
    this.validateForm();
  }

  validateAmount(value) {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let isValid = true;

    fields.amount = value;

    if (value && (value < this.props.minAmount || value > this.props.maxAmount)) {
      isValid = false;
      errors.amount = errorMessages.amount;
    } else {
      isValid = true;
      errors.amount = '';
    }

    this.setState({ fields, errors });

    return isValid;
  }

  validateForm() {
    const emailPattern = new RegExp(/\S+@\S+/);
    let fields = this.state.fields;
    let errors = {}
    let isValid = true;

    if (this.state.validate) {
      if (!fields.amount || !this.validateAmount(fields.amount)) {
        errors.amount = errorMessages.amount;
      }

      if (!fields.recipientName) {
        errors.recipientName = errorMessages.recipientName;
      }

      if (!fields.recipientEmail || !emailPattern.test(fields.recipientEmail)) {
        errors.recipientEmail = errorMessages.recipientEmail;
      }

      if (!fields.senderName) {
        errors.senderName = errorMessages.senderName;
      }

      if (!fields.senderEmail || !emailPattern.test(fields.recipientEmail)) {
        errors.senderEmail = errorMessages.senderEmail;
      }
    }

    this.setState({ errors });

    return Object.values(errors).length === 0 ? isValid : !isValid;
  }

  render() {
    const { fields, errors } = this.state;
    const amountText = fields.amount && !errors.amount ? `$${fields.amount}` : '';

    return (
      <form id="gift-card-form" noValidate onSubmit={this.submitForm}>
        <fieldset className="gift-card-fieldset__amount section-margin">
          <legend>Select a gift card amount</legend>

          <p className="fieldset-description">
            Choose an amount between ${this.props.minAmount} and ${this.props.maxAmount}
          </p>

          <div className="form-group">
            <GiftCardAmount amount="25" handleChange={this.setAmount} />
            <GiftCardAmount amount="50" handleChange={this.setAmount} />
            <GiftCardAmount amount="100" handleChange={this.setAmount} />
            <GiftCardAmount amount="200" handleChange={this.setAmount} />
            <GiftCardAmountCustom error={errors.amount} handleChange={this.setCustomAmount}/>
          </div>

          <InputErrorMessage message={errors.amount} />
        </fieldset>

        <fieldset className="gift-card-fieldset__recipient section-margin">
          <legend>Send a {amountText} gift card to:</legend>

          <div className="form-group flex-equal-widths">
            <TextInput
              error={errors.recipientName}
              handleChange={this.updateFieldValues}
              id="recipient-name"
              label="Recipient's Name"
              name="recipientName"
              placeholder="Name of recipient"
              type="text"
              value={fields.recipientName || ''}
            />

            <TextInput
              error={errors.recipientEmail}
              handleChange={this.updateFieldValues}
              id="recipient-email"
              label="Recipient's Email"
              name="recipientEmail"
              placeholder="example@domain.com"
              type="email"
              value={fields.recipientEmail || ''}
            />
          </div>
        </fieldset>

        <fieldset className="gift-card-fieldset__sender section-margin">
          <legend>From:</legend>

          <div className="form-group flex-equal-widths">
            <TextInput
              error={errors.senderName}
              handleChange={this.updateFieldValues}
              id="sender-name"
              label="Sender's Name"
              name="senderName"
              placeholder="Name of Sender"
              type="text"
              value={fields.senderName || ''}
            />

            <TextInput
              error={errors.senderEmail}
              handleChange={this.updateFieldValues}
              id="sender-email"
              label="Sender's Email"
              name="senderEmail"
              placeholder="example@domain.com"
              type="email"
              value={fields.senderEmail || ''}
            />
          </div>
        </fieldset>

        <input type="submit" value="Add to cart" />
      </form>
    )
  }
}

export default GiftCardForm;