import React from 'react';
import './App.css';

const NavBar = () => (
  <header className='navbar'>
      <div className='item'>AVIS</div>
      <div className='item'>ÉVÈNEMENTS</div>
      <div className='item'>PRESSE</div>
      <div className='item'>BIOGRAPHIE DU CHEF</div>
      <div className='item'>MENU REVEILLON</div>
      <div className='item'>OH CLIQUE</div>
      <div className='item'>ACCÈS/CONTACT</div>
  </header>
);

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
