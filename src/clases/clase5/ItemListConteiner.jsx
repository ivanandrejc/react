import {useState} from 'react'

export const saludar = () => console.log('saludo')

const ItemListContainer = ( {saludo = 'saludo por defecto'} ) => { 
    //hook es una fn de react que me devuelve estados persistentes
    // const [count, setCount] = useState(0)
    // const [boleano, setBoleano] = useState(true)
    
    // const handleContador = () => {
    //     setCount(count+1)
    // }
    // const handleContadorRest = () => {
    //     setCount(count-1)
    // }
    // const handleBool = () => {
    //     setBoleano(!boleano)
    // }
    // console.log(boleano)

    
    console.log('asincronismo llamada a apis 1')

    return (
        <section > 
            ItemListContainer
            {/* <br />
            <label>{saludo}</label>    */}
            {/* <p className='alert alert-danger'>{count}</p> */}
            {/* <button className='btn btn-outline-primary' onClick={ handleContador }> + </button>  
            <button className='btn btn-outline-primary' onClick={ handleContadorRest }> - </button>  
            <button className='btn btn-outline-primary' onClick={ handleBool }> cambiarBool </button>   */}
        </section>
    )
}

export default ItemListContainer