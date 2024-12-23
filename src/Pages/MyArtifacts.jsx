import { useQuery } from "@tanstack/react-query";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import Spinner from "../component/Spinner";
import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";


const MyArtifacts = () => {
const {user}=UseAuth()
console.log(user)
const {isLoading,data:artifact,error,refetch}=useQuery({
    queryKey:['MyArtifact'],
    queryFn:async()=>{
        const result=await axios.get(`http://localhost:5000/allArtifact?email=${user?.email}`)
        return result.data
    }
})

useEffect(()=>{
  refetch()
},[user?.email])


   const handleDelet=(id)=>{
console.log(id)
   }

    if(isLoading) return <Spinner></Spinner>

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Title</th>
        <th>Adder Name</th>
        <th>Delet & Update</th>
  
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{artifact?.map((art,idx)=> <tr key={art._id}>
        <th>
        {idx +1} 
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" rounded-md h-12 w-12">
                <img
                  src={art.img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{art.name}</div>
              <div className="text-sm opacity-50">{art.location}</div>
            </div>
          </div>
        </td>
        <td>
         {art.adderName}
        </td>
        <td>
            <div className="flex  gap-5 text-3xl">
            <CiEdit className="hover:cursor-pointer" />
            <MdAutoDelete onClick={()=>handleDelet(art._id)} className="hover:cursor-pointer text-red-500" />
            </div>
        </td>
    
      </tr>)}
     
    
     
     
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default MyArtifacts;