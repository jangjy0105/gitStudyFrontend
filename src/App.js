import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  
  const [a, setA] = useState('abcdefgh');

  useEffect(() => {
    axios.get('/api/hello') 
    .then(res => setA(res.data))
  })

  return (
    <div className="App">
      {a}
    </div>
  );
}

export default App;
