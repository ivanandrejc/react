import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../helpers/gFetch"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { Input } from "../../clases/clase9/Input"
import Intercambiabilidad from "../../clases/clase9/Intercambiabilidad"

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})

    const { productId } = useParams()
    // console.log(productId)

    useEffect(()=>{
        gFetch()
        .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
    })     

    return (
        <>
            <ItemDetail product={product} />
            {/* <Input /> */}
            {/* <Intercambiabilidad /> */}

        </>
    )
}

export default ItemDetailContainer