import { Outlet } from "react-router-dom";
import OrderDialog from "../components/order-dialog/OrderDialog";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout() {
  return (
    <>
        <OrderDialog />
        <Header />
        <main className="main-container">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
