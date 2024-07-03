import OrderHome from "./pages/OrderHome"
import Login from "./pages/Login"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Beverage from "./pages/Beverage"
import Snack from "./pages/Snack"
import Juice from "./pages/Juice"
import SignUp from "./pages/SignUp"

import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Sidebar from "./component/Sidebar"
import Header from "./component/Header"
import Footer from "./component/Footer"



function App() {


  return (
   
  <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home" element={<OrderHome/>}/>
          <Route path="/beverage" element={<Beverage/>}/>
          <Route path="/snack" element={<Snack/>}/>
          <Route path="/juice" element={<Juice/>}/>
        </Routes>
    <Sidebar/>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
