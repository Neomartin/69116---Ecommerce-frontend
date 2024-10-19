import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import AdminProduct from "./pages/admin-product/AdminProduct";
import ProductDetail from "./pages/product-detail/ProductDetail";
import OrderDialog from "./components/order-dialog/OrderDialog";
import Register from "./pages/register/Register";
import Layout from "./layout/Layout";
import AdminGuard from "./services/guard/AdminGuard";

export default function App() {
  return (
    <>
    
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            {/* #Dentro del componente Layout, se renderizarán las rutas hijas */}
            <Route index element={<Home />} />

            <Route path="product-detail/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />


            <Route path="admin-product" element={

                <AdminGuard>
                  <AdminProduct />
                </AdminGuard>
              } />


            <Route path="admin-user" element={
              <AdminGuard>
                  {/* ADMIN USER COMPONENT */}
                  <AdminProduct /> 
              </AdminGuard>
            } />

            <Route path="*" element={<h1>Not Found</h1>} />

      
          </Route>
        </Routes>
    </>
  );
}
