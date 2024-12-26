
import { Navigate, useLocation } from "react-router-dom";

import UseAuth from "../hooks/UseAuth";
import Spinner from "../component/Spinner";


const AuthPrivate = ({children}) => {
    const {user,loading}=UseAuth()
    const location=useLocation()
    console.log(location)

    if(loading){
        return <Spinner></Spinner>
    }

    if(user){
        return children
    }
    return (
        <div>
      <Navigate to={'/login'} state={location.pathname}></Navigate>
        </div>
    );
};

export default AuthPrivate;