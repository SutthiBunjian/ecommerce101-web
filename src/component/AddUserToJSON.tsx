
    import { User } from '../types/User';

    export default function AddUserToJSON(user: User) {
       

        localStorage.setItem("Users",JSON.stringify(user, null, 2))
    }
    
