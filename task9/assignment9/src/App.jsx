import './App.css'
import React from 'react';
import Person from './components/Person';
import Product from './components/Product';

const App = () => {
  return (
    <div>
      <Person name="Neeti" age={20} />
      <Product name="Laptop" price="$999" />
      <Person name="Hani" age={24} />
      <Product name="Heaphones" price="$78" />
    </div>
  );
};

export default App;

