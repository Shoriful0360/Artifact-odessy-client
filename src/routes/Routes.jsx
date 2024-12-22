import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import AddArtifacts from "../Pages/AddArtifacts";
import AuthPrivate from "../Private/AuthPrivate";



export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },{
                path:'/addArtifact',
                element:<AuthPrivate><AddArtifacts></AddArtifacts></AuthPrivate>
            }
        ]
    }
])
