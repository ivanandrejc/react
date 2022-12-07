import {useState, useEffect} from 'react'

export const saludar = () => console.log('saludo')

const ItemListContainer = ( {saludo = 'saludo por defecto'} ) => { 
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(true)
    // productos en un estado 

    // se ejecuta siempre en un nuevo render
    // useEffect(()=>{
    //     // acciones
    //     console.log('addEvenlistener(evento, funci)')
    //     return ()=>{
    //         console.log('removeEventListener')
    //     }
    // })

    // // se ejecuta una sola vez despues del primer render
    useEffect(()=>{
        // acciones
        console.log('asincronismo llamada a apis 2 - una sola vez')
        // promesa
        // guardar en un estado 
    }, [])
    
    // // este me permite escuchar lo que ponga en el array
    // useEffect(()=>{
    //     // acciones
    //     console.log('solo cuando cambie bool 3 ')
    // }, [bool])



    const handleCount = () => setCount(count+1)
    const handleBool = () => setBool(!bool)
    
    // console.log('itemListContainer rendering 4')
    return (
        <section > 
            ItemListContainer  
            <button onClick={handleCount}>+</button>         
            <button onClick={handleBool}>bool</button>         
        </section>
    )
}

export default ItemListContainer