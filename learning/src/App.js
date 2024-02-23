// import logo from './logo.svg';
import Button from './components/Button';
import './App.css';
import Info from './components/Info';
import TabrejPic from './images/TabrejPic.jpeg';
import ConditionalRendering from './components/ConditionalRendering';
import ArrayMethods from './components/ArrayMethods';

function App() {
  const user={
    name:"Tabrej",
    pic:TabrejPic,
    dept:"Computer Engineering"
};
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello I'm Tabrej</h1>
        <Button/>
        <Info user={user}/>
        <ConditionalRendering user={user}/>
        <ArrayMethods/>

      </header>
    </div>
  );
}

export default App;
