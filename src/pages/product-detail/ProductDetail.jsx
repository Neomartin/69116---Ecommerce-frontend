import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOrder } from '../../context/OrderContext';

const URL = import.meta.env.VITE_SERVER_URL;


export default function ProductDetail() {
    //  Importar mi contexto
    const { addProduct } = useOrder();


    const [product, setProduct] = useState()

    const { id } = useParams();


    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct() {
        try {
            
            const response = await axios.get(`${URL}/products/${id}`)

            console.log(response.data)

            setProduct(response.data)

        } catch (error) {
            alert("Error al obtener el producto")
            console.log(error)
        }
    }

    if(!product) {
        return (
            <div className="loader-container">
                <h1>CARGANDO...</h1>
            </div>
        )
    }

    return (
        
        <div className='product-detail-container'>
            {/* Estructura del detalle del producto */}
            <h1>{ product?.name }</h1>

            <button onClick={() => addProduct(product)}>Agregar al carrito</button>

        </div>
    )
}
