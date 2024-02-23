// import logo from './logo.svg';
import Button from './components/Button';
import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello I'm Tabrej</h1>
        <Button/>
        <Info info={info}/>

      </header>
    </div>
  );
}

export default App;
