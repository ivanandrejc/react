import {useState, useEffect} from 'react'
import { gFetch } from '../../helpers/gFetch'

// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        gFetch()// consulta a un api pero solo simulación 
        // .then( respuesta => respuesta )
        .then(data => setProduct(data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    console.log(products)
    {/*  [1,2,3,4,5] => 1 [ <li>1</li>, <li>2</li>, <li>3</li>, .... ]  */}
    return (
        <section >
        
            {   loading ? 
                    <h2>loading...</h2> 
                :
                    products.map( product =>    <div            
                                                    style={{ marginLeft: 100}}
                                                    className='col-md-3'
                                                    key={product.id}
                                                >    
                                                    
                                                    <div className="card w-100 mt-5" >
                                                        <div className="card-header">
                                                            {`${product.name} - ${product.categoria}`}
                                                        </div>
                                                        <div className="card-body">
                                                            <img src={product.foto} alt='' className='w-50' />
                                                            {product.price}                                                            
                                                        </div>
                                                
                                                        <div className="card-footer">                                                        
                                                            <button className="btn btn-outline-primary btn-block">
                                                                detalle del producto
                                                            </button>
                                                        </div>
                                                    </div>
                                                                     
                                                    
                                                </div> 
                        ) 
            }            
        
        </section>
    )
}

export default ItemListContainer












// <div            
// style={{ marginLeft: 100}}
// className='col-md-3'
// >    
// <Link to={`/detalle/${prod.id}`}>
//     <div className="card w-100 mt-5" >
//         <div className="card-header">
//             {`${prod.name} - ${prod.categoria}`}
//         </div>
//         <div className="card-body">
//             <img src={prod.foto} alt='' className='w-50' />
//             {prod.price}                                                            
//         </div>

//         <div className="card-footer">                                                        
//             {/* <button className="btn btn-outline-primary btn-block">
//                 detalle del producto
//             </button> */}
//         </div>
//     </div>
// </Link>                   

// </div> 
