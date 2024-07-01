import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const navigate = useNavigate();

    function handleLogin(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(username ==='admin' && password ==='12345'){
            setIsLoggedIn(true);
            navigate('/home')
        }else{
            alert('Invalid username or password')
        }
        
    }
    if (isLoggedIn){
        console.log("LoggedIn")
        
        return null;
    }

    return(
    <div className="bg-background">
        <div className="flex items-center justify-center h-screen">
            <div className="">
                <div className="box-content bg-gray-800 h-80 w-96 p-8 border-4 border-gray-500 rounded-lg shadow-lg" >
                    <h1 className="text-4xl font-bold text-center text-white">Login</h1>
                    
                    <form onSubmit={handleLogin}>
                        <div className="mt-6">
                            <label className="text-white text-sm">Please Log in to your account </label></div>
                    
                        <div className="relative my-4">
                        
                        <input  type="text"
                                className="block w-96 py-2.5 px-2 text-sm
                                 text-white rounded-xl bg-gray-700
                                 border-gray-300 " 
                                placeholder=" Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                required
                                />
                        </div>
                        
                        <div className="relative my-4">

                        <input  type="password" 
                                className="block w-96 py-2.5 px-2 text-sm
                                 text-white rounded-xl bg-gray-700
                                border-gray-300 " 
                                placeholder=" Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required />
                        </div>
                        <div className=" ">
                        <button className="bg-blue-400 py-2.5 rounded-2xl w-96 mt-12 " type ="submit">LogIn</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    );
}
export default Login;