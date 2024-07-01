import Home from "./Home"
import Login from "./Login"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Beverage from "./Beverage"
import Snack from "./Snack"
import Juice from "./Juice"
import SignUp from "./SignUp";


function App() {


  return (
   
  <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/beverage" element={<Beverage/>}/>
      <Route path="/snack" element={<Snack/>}/>
      <Route path="/juice" element={<Juice/>}/>
    </Routes>
    
  </BrowserRouter>
  )
}

export default App
