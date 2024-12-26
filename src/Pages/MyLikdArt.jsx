import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "../hooks/UseAuth";
import Spinner from "../component/Spinner";
import { useEffect } from "react";
import Error from "./Error";
import Nodata from "../component/Nodata";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyLikdArt = () => {
    const {user}=UseAuth()
    const axiousSecure=useAxiosSecure()
const {isPending,refetch,data:likeArt}=useQuery({
    queryKey:['like'],
    queryFn:async()=>{
       const result= await axiousSecure.get( `/likeCount?email=${user?.email}`)
       return result.data
    }
})
useEffect(()=>{
refetch()
},[refetch])

if(isPending) return <Spinner></Spinner>
console.log(likeArt)
    return (
        <div>

          {
            likeArt?.length?  <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    
                  </th>
                  <th>Image</th>
                  <th>Artifact Name</th>
                  <th>Created By</th>
                
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
          
                {
                  likeArt?.map((art,idx)=>   <tr key={art._id}>
                      <th>
                        {idx+1}
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={art.img}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        
                        </div>
                      </td>
                      <td>
                        {art.name}
                       
                      </td>
                      <td>{art.disBy}</td>
                     
                    </tr>)
                }
             
               
              </tbody>
              {/* foot */}
            
            </table>
          </div>
            :
           <Nodata></Nodata>
          }
           
        </div>
    );
};

export default MyLikdArt;
