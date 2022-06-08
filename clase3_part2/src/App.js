import './App.css';
import {useState} from 'react'

const WarningNotUsed = () => {
  return <p>El componente todavía no se ha utilizado. </p>
};

const ListOfClicks = ({clicks}) => {
  return <p>{clicks.join(", ")}</p>
}

function App() {
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    setClicks((prevClicks) => [...prevClicks,'L']);
  };

  const handleClickRight = () => {
    setClicks((prevClicks) => [...prevClicks,'R']);
  };

  const handleReset = () => {
    setClicks([]);
  }

  const left = clicks.filter(click => click === 'L');
  const right = clicks.filter(click => click === 'R');
  
  return (
    <div className="App">
      {left.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right.length}
      <p>
        <button onClick={handleReset}>reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      {
        clicks.length===0
        ? <WarningNotUsed />
        : <ListOfClicks clicks={clicks} /> //ODIO el operador ternario pero qué remedio...
      }
    </div>
  );
}

export default App;
