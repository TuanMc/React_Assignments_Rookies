import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() { // This should be class component
  // Create a state with property 'bootcamp'
  return (
    <div className="App">
      <NavBar username = {'NGUYEN HOANG THANG'} /> <!-- No need to add props here -->
      <Home bootcamp= { 'Rookies'}/> <!-- Replace this value by this.state.bootcamp -->
    </div>
  );
}

export default App;
