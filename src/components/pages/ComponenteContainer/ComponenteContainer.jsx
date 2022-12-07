import Formulario from "../../Formulario/Formulario"
import Item from "../../Item/Item"
// import { Titulo } from "../../Titulo/Titulo"

const ComponenteContainer = ( { greeting } ) => {

  // console.log(props)

  // en estos compnentes que vamos a llamar a alas apis
  let tituloApp = 'Titulo de app' 
  const saludo = () => console.log('Hola')
  return (
    <div>
      {/* <Titulo 
          titulo={tituloApp} 
          subTitulo={'Subtitulo de app'} 
        /> */}
        <p>{greeting}</p>
        <Formulario />
        <Item saludo={ saludo } />
        {/* { titulo( {} ) } */}
        
    </div>
  )
}

export default ComponenteContainer