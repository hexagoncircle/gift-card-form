import React from 'react';
import GiftCardAmount from './GiftCardAmount';
import GiftCardAmountCustom from './GiftCardAmountCustom';
import InputErrorMessage from './InputErrorMessage';
import TextInput from './TextInput';

const ERROR_MESSAGES = {
  amount: 'Please enter a gift card value between $5 and $500.',
  recipientName: 'Enter the recipient\'s name.',
  recipientEmail: 'Enter a valid email address for the recipient',
  senderName: 'Enter the sender\'s name',
  senderEmail: 'Enter a valid email address for the sender'
}
const TIMER_DELAY = 500;

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
    this.updateStateFields = this.updateStateFields.bind(this);
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
    this.timer = setTimeout(() => this.validateAmount(value), TIMER_DELAY);

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

  updateStateFields(e) {
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
      errors.amount = ERROR_MESSAGES.amount
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
        errors.amount = ERROR_MESSAGES.amount;
      }

      if (!fields.recipientName) {
        errors.recipientName = ERROR_MESSAGES.recipientName;
      }

      if (!fields.recipientEmail || !emailPattern.test(fields.recipientEmail)) {
        errors.recipientEmail = ERROR_MESSAGES.recipientEmail;
      }

      if (!fields.senderName) {
        errors.senderName = ERROR_MESSAGES.senderName;
      }

      if (!fields.senderEmail || !emailPattern.test(fields.recipientEmail)) {
        errors.senderEmail = ERROR_MESSAGES.senderEmail;
      }
    }

    this.setState({ errors });

    return Object.values(errors).length === 0 ? isValid : !isValid;
  }

  render() {
    const amountText = this.state.fields.amount && !this.state.errors.amount ? `$${this.state.fields.amount}` : '';

    return (
      <form id="gift-card-form" noValidate onSubmit={this.submitForm}>
        <fieldset className="gift-card-amount section-margin">
          <legend>Select a gift card amount</legend>

          <span className="additional-description">
            Choose an amount between ${this.props.minAmount} and ${this.props.maxAmount}
          </span>

          <div className="form-group gift-card-amount__options">
            <GiftCardAmount amount="25" setAmount={this.setAmount} />
            <GiftCardAmount amount="50" setAmount={this.setAmount} />
            <GiftCardAmount amount="100" setAmount={this.setAmount} />
            <GiftCardAmount amount="200" setAmount={this.setAmount} />
            <GiftCardAmountCustom
              error={this.state.errors.amount}
              handleChange={this.setCustomAmount}
            />
          </div>

          <InputErrorMessage message={this.state.errors.amount} />
        </fieldset>

        <fieldset className="section-margin">
          <legend>Send a {amountText} gift card to:</legend>

          <div className="form-group flex-equal-widths">
            <TextInput
              error={this.state.errors.recipientName}
              handleChange={this.updateStateFields}
              id="recipient-name"
              label="Recipient's Name"
              name="recipientName"
              placeholder="Name of recipient"
              value={this.state.fields.recipientName || ''}
            />

            <TextInput
              error={this.state.errors.recipientEmail}
              handleChange={this.updateStateFields}
              id="recipient-email"
              label="Recipient's Email"
              name="recipientEmail"
              placeholder="example@domain.com"
              value={this.state.fields.recipientEmail || ''}
            />
          </div>
        </fieldset>

        <fieldset className="gift-card__information section-margin">
          <legend>From:</legend>

          <div className="form-group flex-equal-widths">
            <TextInput
              error={this.state.errors.senderName}
              handleChange={this.updateStateFields}
              id="sender-name"
              label="Sender's Name"
              name="senderName"
              placeholder="Name of Sender"
              value={this.state.fields.senderName || ''}
            />

            <TextInput
              error={this.state.errors.senderEmail}
              handleChange={this.updateStateFields}
              id="sender-email"
              label="Sender's Email"
              name="senderEmail"
              placeholder="example@domain.com"
              value={this.state.fields.senderEmail || ''}
            />
          </div>
        </fieldset>

        <input type="submit" value="Add to cart" />
      </form>
    )
  }
}

export default GiftCardForm;