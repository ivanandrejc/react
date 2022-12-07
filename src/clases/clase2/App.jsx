import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)


    const condition = true
    // let resultado = ''


    // if (condition) {
    //     resultado = 'Verdadero'
    // } else {
    //   resultado = 'Falso'
    // }


    // if condicion else -> condition ? true : false


    // console.log(`El resultado es: ${ condition ? 'Verdadero' : 'Falso' }`)


    // spred operator
    // const array = [ 2, 3, 4, 5 ] // [1,2,3,4,5]
    // let uno = 1 
    
    // let newArray = [ ...array, uno ]
    // console.log(newArray)

    // propiedades dinámicas



    const campo = '_persona'

    const obj = {
      nombre: 'Fede',
      apellido: 'Osandon',   
      ['id'+campo]: '65a4sd6f464asd',
      email:'fede@gmail.com' 
    }

    // deep matching

      // destructuring: 

      // const nombre = obj.nombre
      // const apellido = obj.apellido

      const { nombre, apellido, email = 'f@gmail.com' } = obj

      // let firstName = nombre

    console.log(email)
    // console.log(lastName)


    // ejercitación
    const array = [ 1 , 2 , 3 , 4 ]
    let numero = array.find( (nro) => nro === 2  )
    
    // let numeroArray = [1,2,3,4,5]
    // let array_vacio = []
    // for (const nro of numeroArray) {
    //   if (nro === 5){
    //     return nro
    //   } 
    // }
    // console.log(numero)

    // const functionFind = (arreglo,buscar) => {
    //   let founded = false
    //   arreglo.forEach(item=>{
    //     if(item === buscar)
    //       founded = true
    //   })
    //   return founded
    // }
    // console.log(functionFind([1,2,3,4], 2))
    let numeros = [1,2,3,4,5];
    let vacio =[];
    let encontrado

    for(numero of numeros){
        if(numero == 5){            
            return  numero
        }
    }

    

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
