import { useNavigate } from "react-router-dom";


export default function PageTab(){


const navigate = useNavigate();

    return(
        <ul className="flex mx-auto w-full max-w-screen-lg ps-1">
           
           <li className="me-2 ">
                <a href="#"  onClick={()=>navigate('/home')}  className="text-center inline-block p-4 text-blue-600 bg-gray-400 rounded-t-lg active w-24">Home</a>
            </li>
            <li className="me-2 ">
                <a href="#"  onClick={()=>navigate('/beverage')}  className="text-center inline-block p-4 text-blue-600 bg-gray-400 rounded-t-lg active w-24">Beverage</a>
            </li>
            <li className="me-2">
                <a href="#" onClick={()=>navigate('/snack')} className="text-center inline-block p-4 text-blue-600 bg-gray-400 rounded-t-lg w-24">Snack</a>
            </li>
            <li className="me-2 ">
                <a href="#" onClick={()=>navigate('/juice')} className=" text-center inline-block p-4 text-blue-600 bg-gray-400 rounded-t-lg w-24">juice</a>
            </li>
           
        </ul>
    );
}