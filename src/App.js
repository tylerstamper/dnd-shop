import { useEffect, useState } from 'react';
import './App.css';
import Shop from './Components/Shop/Shop';
import Helper from './helper';

function App() {


  useEffect(() => {
    //this gathers a list from fetchBroadList()
    //inside of fetchBroadList() another looping function is called to add items to local store
    Helper.fetchItemsBroad();
  },[])


  return (
    <main className="App">
      <h1 style={{height: '3rem', margin: 0}}>DnD Shop Generator</h1>
      <Shop />
    </main>
  );
}

export default App;
