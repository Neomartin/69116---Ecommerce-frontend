import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import AdminTable from "../../components/admin-table/AdminTable";

import './AdminProduct.css';
import Swal from "sweetalert2";

const URL = "https://66cd012e8ca9aa6c8cc93b12.mockapi.io/api/v1";


export default function AdminProduct() {
  const [ products, setProducts ] = useState([]);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  useEffect(() => {

    getProducts();

  }, [])


  async function getProducts() {

    try {
      // Carga de productos
      const response = await axios.get(`${URL}/products`);

      console.log(response.data);

      setProducts(response.data)

    } catch (error) {
      console.log(error);

    } // end catch block

  } //end getProducts function
  // !getProducts();

  function deleteProduct(identificador) {

      Swal.fire({
        title: "Borrar producto",
        text: "Realmente desea borrar este producto",
        icon: "warning",
        reverseButtons: true,
        showCancelButton: true,
      }).then(async(result) => {
        try {
          if(result.isConfirmed) {
            const response = await axios.delete(`${URL}/products/${identificador}`);

            console.log(response.data);
      
            getProducts();
          }
        } catch (error) {
          console.log(error)
          // Mensaje para el usuario de que algo falló
          Swal.fire({
            title: "Error al borrar",
            text: "El producto no fue borrado",
            icon: "error"
          })
        }
      })

  }



  async function onProductSubmit(producto) {
    console.log(producto)
    try {
      
      const response = await axios.post(`${URL}/products`, producto)
      console.log(response.data)

      getProducts();

    } catch (error) {
      console.log(error)
      // Swal y mostrar error al user
    }
    
  }

  return (
    <>
      

      <div className="admin-container">
          {/* Contenedor del formulario */}
          <div className="form-container">
            <h1>AdminProduct</h1>
            <form className="admin-form" onSubmit={handleSubmit(onProductSubmit)}>

              <div className="input-group">
                <label htmlFor="name">Nombre producto</label>

                <input type="text" id="name" 
                        {...register("name", { required: true, minLength: 3 }) 
                } />

                { errors.name?.type === "required" && <div className="input-error">El campo es requerido</div> }

                { errors.name?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div> }

              </div>

              <div className="input-group">
                <input type="number" {...register("price", { required: true }) } />

                { errors.price && <div className="input-error">El campo price es requerido</div> }
              </div>

              <div className="input-group">
                <label htmlFor="description">Descripción</label>
                <textarea {...register("description")} rows={5}></textarea>
              </div>

              <div className="input-group">
                <label htmlFor="">Categoría</label>
                <select {...register("category")}>\
                  <option value="Consolas">Consolas Video Juegos</option>
                  <option value="games">Juegos</option>
                  <option value="devices">Accesorios</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="createdAt">Fecha de ingreso</label>
                <input type="date" {...register("createdAt")}  />
              </div>

                <div className="input-group">
                  <label htmlFor="">Imagen</label>
                  <input type="url" {...register("image") } />
                </div>

              <button className="btn" type="submit" disabled={ !isValid }  >Crear</button>

            </form>
          </div>
          {/* Contenedor de la tabla de productos */}
          <div className="table-container">

            <AdminTable products={products} deleteProduct={deleteProduct} />
            
          </div>
      </div>
      
    </>
  )
}
