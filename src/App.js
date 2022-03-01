import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar username = {'NGUYEN HOANG THANG'} />
      <Home bootcamp= { 'Rookies'}/>
    </div>
  );
}

export default App;
