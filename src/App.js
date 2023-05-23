import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  
  const [a, setA] = useState('asdfsdafsdfdasd');

  useEffect(() => {
    axios.get('/api/hello') 
    .then(res => setA(res.data))
  })

  return (
    <div className="App">
      {a[0].title}
    </div>
  );
}

export default App;
