import './App.css';
import { useState } from "react";
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {
  const [bootcamp, setBootcamp] = useState('Rookies')
  const [username, setUsername] = useState('Nguyen Hoang Thang')

  console.log(bootcamp, username)
  return (
    <div className="App">
      <NavBar username = {username}/>
      <Home bootcamp = {bootcamp}/>
    </div>
  );
}

export default App;
