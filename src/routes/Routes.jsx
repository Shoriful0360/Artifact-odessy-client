import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import AddArtifacts from "../Pages/AddArtifacts";
import AuthPrivate from "../Private/AuthPrivate";
import ArtDeatils from "../Pages/ArtDeatils";
import AllArtifacts from "../Pages/AllArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import Error from "../Pages/Error";
import UpdateArt from "../Pages/UpdateArt";
import MyLikdArt from "../Pages/MyLikdArt";



export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
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
            },
            {
                path:'/details/:id',
                element:<AuthPrivate><ArtDeatils></ArtDeatils></AuthPrivate>,
                
            },
            {
                path:'/allArts',
                element:<AllArtifacts></AllArtifacts>
            },
            {
                path:'/myArtifacts',
                element:<AuthPrivate><MyArtifacts></MyArtifacts></AuthPrivate>
            },
            {
                path:'/myLike',
                element:<AuthPrivate><MyLikdArt></MyLikdArt></AuthPrivate>
            },
            {
                path:'/update/:id',
                element: <UpdateArt></UpdateArt>,
                loader:({params})=>fetch(`https://historical-artifacts-tracker-server-seven.vercel.app/update/${params.id}`)
            }
        ]
    },
   
])
