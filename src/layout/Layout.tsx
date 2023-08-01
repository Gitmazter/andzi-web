import { RouterProvider } from "react-router"
import { router } from "../routes/router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Sidebar } from "./Sidebar"

export const Layout = () => {


  return(
    <>
      <Header />
      <Sidebar />
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}