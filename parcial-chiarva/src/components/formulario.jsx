import React from 'react'
import Card from './components/card'
import Card from '../card';

const Formulario = (props) => {

    const [espacio1, setEspacio1] = useState(' '); 
    const [espacio2, setEspacio2] = useState(' ')
    console.log(props);

    
    const handleSubmit = (event) => {
        event.preventDefault();

        const regexEspacio1 = /^[^\s][A-Za-z\s]{3,}$/;
        const regexEspacio2 = /^[A-Za-z\s]{6,}$/;

        if (regexEspacio1.test(espacio1) && regexEspacio2.test(espacio2)) {
    
            setMostrar(true)
            setError(false)
        
          } else {
            setError(true)
            setMostrar(false)
          }

    }   

return (
    <div>
        <form onSubmit={handleSubmit}>
       
            <div>
            <label htmlFor="espacio1">Nombre</label>
            <input
                type="Ingresa tu nombre"
                id="espacio1"
                value={espacio1}
                onChange={(e) => setEspacio1(e.target.value)}
            />
            </div>
           
            <div>
            <label htmlFor="espacio2">Auto</label>
            <input
                type="Ingresa tu auto deportivo favorito"
                id="espacio2"
                value={espacio2}
                onChange={(e) => setEspacio2(e.target.value)}    
        /></div>
        
        <div>
        <button type="submit">Enviar datos</button>
        </div>

        </form>
    </div>
)
}
export default Formulario