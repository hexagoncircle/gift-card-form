import React from 'react';
import './App.scss';
import GiftCardForm from './components/GiftCardForm';

function App() {
  return (
    <div className="App">
      <h1>Gift Cards</h1>
      <GiftCardForm minAmount={5} maxAmount={500} />
    </div>
  );
}

export default App;
