import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductGallery.css';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import Pagination from '../pagination/Pagination';

const URL = import.meta.env.VITE_SERVER_URL;

const URL2 = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductGallery({ category }) {
    const [ products, setProducts ] = useState([]);
    const [ limit, setLimit ] = useState(3);
    const [ total, setTotal ] = useState(0);

    const { token, logout } = useUser();

    useEffect(()=> {
        // Ejecutar la función getProducts al montar el componente 1 vez
        getProducts();
    }, [limit])
    
    async function getProducts(skip = 0) {
        // Obtener los productos desde mockapi y actualizar el estado
        try {
            
            const response = await axios.get(`${URL2}/products?skip=${skip}&limit=${limit}`)

            // const userResponse = await axios.get(`${URL2}/users`, {
            //     headers: {
            //         Authorization: token
            //     }
            // })

            console.log(response)

            // const filteredProducts = response.data.filter(prod => prod.category === category);
            // setProducts(filteredProducts)

            setProducts(response.data.products)

            setTotal(response.data.total)

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

        <Pagination total={total} limit={limit} getFn={getProducts} />

        <select onChange={(evt) => setLimit(evt.target.value)  }>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>

        </select>

    </section>
  )
}
