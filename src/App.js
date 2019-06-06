import React from 'react';
import './App.scss';
import GiftCardForm from './GiftCardForm';

function App() {
  return (
    <div className="App">
      <GiftCardForm minAmount={5} maxAmount={500} />
    </div>
  );
}

export default App;
