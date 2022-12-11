import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ItemListContainer from './containers/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import CartContainer from './containers/CartContainer/CartContainer'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
    
    let saludo = 'saludo' // estado
   


    return (
        <div 
            className='border border-5 border-primary'
            // onClick={()=> alert('soy evento de app')}    
        >
            <BrowserRouter>
              
                <NavBar />

                <Routes >
                    <Route path='/' element={ <ItemListContainer saludo={saludo}  /> } />
                    <Route path='/category/:id' element={ <ItemListContainer saludo={saludo}  /> } />
                    <Route path='/detail/:productId' element={<ItemDetailContainer /> } />
                    <Route path='/cart' element={ <CartContainer /> } />
                    {/* <Route path='/404' element={ <Componente404 /> } /> */}
                    
                    {/* 
                    <CartContainer />                                     */}
                    <Route path='*' element={<Navigate to='/' />}/>
                </Routes>       
                
            </BrowserRouter>

        </div>
        
    )
}

export default App


