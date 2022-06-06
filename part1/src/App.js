//import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js'

const App = () => {
  return (
    <div className="App">
      <h1>Fecha de visita a la web: </h1>
      <Mensaje color="red" offset="2"/>
    </div>
  );
}

export default App;
