import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductGallery.css';
import axios from 'axios';

const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductGallery({ category }) {
    const [ products, setProducts ] = useState([]);

    useEffect(()=> {
        // Ejecutar la función getProducts al montar el componente 1 vez
        getProducts();
    }, [])
    
    async function getProducts() {
        // Obtener los productos desde mockapi y actualizar el estado
        try {
            
            const response = await axios.get(`${URL}/products`)

            // const filteredProducts = response.data.filter(prod => prod.category === category);
            // setProducts(filteredProducts)

            setProducts(response.data)

        } catch (error) {
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
