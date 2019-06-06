import React from 'react';
import GiftCardForm from './components/GiftCardForm';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1>Gift Cards</h1>
      <GiftCardForm minAmount={5} maxAmount={500} />
    </div>
  );
}

export default App;
