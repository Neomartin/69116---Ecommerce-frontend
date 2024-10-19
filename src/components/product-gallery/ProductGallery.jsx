import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductGallery.css';
import axios from 'axios';
import { useUser } from '../../context/UserContext';

const URL = import.meta.env.VITE_SERVER_URL;

const URL2 = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductGallery({ category }) {
    const [ products, setProducts ] = useState([]);

    const { token, logout } = useUser();

    useEffect(()=> {
        // Ejecutar la función getProducts al montar el componente 1 vez
        getProducts();
    }, [])
    
    async function getProducts() {
        // Obtener los productos desde mockapi y actualizar el estado
        try {
            
            const response = await axios.get(`${URL2}/products`)

            // const userResponse = await axios.get(`${URL2}/users`, {
            //     headers: {
            //         Authorization: token
            //     }
            // })

            console.log(response)

            // const filteredProducts = response.data.filter(prod => prod.category === category);
            // setProducts(filteredProducts)

            setProducts(response.data.products)

        } catch (error) {

            if(error.response.status === 401) {
                alert("Usuario no autorizado");
                logout();
                return;
            }
            alert("Error al obtener productos");
            console.log(error);
        }
    }


  return (
    <section className="product-gallery">
        <h2>Lista de productos: {category}</h2> 

        <div className="product-gallery__container">
            
            {
                products.map(producto => <ProductCard key={producto.id} prod={producto} />)
            }
            
        </div>

    </section>
  )
}
