import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"

const LayoutUser = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        <ToastContainer/>
    </>
  )
}

export default LayoutUser
