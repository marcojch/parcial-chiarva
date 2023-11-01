import './App.css'
import Card from "./card.jsx";
import Formulario from './components/formulario';

function App() {
  return (
    <div>
      <input type="text" name="Cual es tu nombre" id="espacio1" onChange={(event) => console.log(event.target.value)}/>
      <Card espacio1="Nombre" espacio2="Auto" /> 
      <Formulario />
    </div>
  );
}

export default App;