import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import { Titulo } from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'


function App() { 
    
    let saludo = 'saludo' // estado
   


    return (
        <>               
            <NavBar componente = {ItemListContainer} />
            <ItemListContainer saludo={saludo}  />
                                    
        </>
        
    )
}

export default App


