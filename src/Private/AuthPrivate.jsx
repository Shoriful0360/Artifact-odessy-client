
import { Navigate } from "react-router-dom";
import Spinner from "../component/Spinner";
import UseAuth from "../hooks/UseAuth";


const AuthPrivate = ({children}) => {
    const {user,loading,setLoading}=UseAuth()

    if(loading){
        return <p>loading..</p>
    }

    if(user){
        return children
    }
    return (
        <div>
      <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default AuthPrivate;