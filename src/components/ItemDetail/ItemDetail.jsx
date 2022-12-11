import React from 'react'
import Caso1 from '../../clases/clase9/Caso1'
import Caso2 from '../../clases/clase9/Caso2'
import Intercambiabilidad from '../../clases/clase9/Intercambiabilidad'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const onAdd = (cant) => {
        console.log('la cantidad seleccionada es: ',cant)
    }
    return (
        <div className="container border border-3 border-primary rounded">
            <div className="row">
                <div className="col">
                    <img className="w-50" src={product.foto} alt='foto producto' />
                    <h3>nombre: {product.name}</h3>
                    <h3>categoria: {product.categoria}</h3>
                    <h4>precio: {product.price}</h4>
                </div>
                <div className="col">
                    <ItemCount 
                        stock={11} 
                        initial={1} 
                        onAdd={onAdd} 
                    />
                    {/* <Intercambiabilidad /> */}
                    {/* <Caso2 /> */}
                </div>
            </div>
            
        </div>
)
}

export default ItemDetail