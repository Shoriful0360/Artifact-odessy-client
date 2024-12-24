
import { Navigate } from "react-router-dom";

import UseAuth from "../hooks/UseAuth";
import Spinner from "../component/Spinner";


const AuthPrivate = ({children}) => {
    const {user,loading,setLoading}=UseAuth()

    if(loading){
        return <Spinner></Spinner>
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