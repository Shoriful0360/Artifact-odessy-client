import { useQuery } from "@tanstack/react-query";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import Spinner from "../component/Spinner";
import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Nodata from "../component/Nodata";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const MyArtifacts = () => {
const {user}=UseAuth()
const axiousSecure=useAxiosSecure()
const {isLoading,data:artifact,refetch}=useQuery({
    queryKey:['MyArtifact'],
    queryFn:async()=>{
      const result=await axios.get(`http://localhost:5000/allArtifact/${user?.email}`,{withCredentials:true})
      return result.data
    
       
    }
})

useEffect(()=>{
  refetch()
},[user?.email])

if(isLoading) return <Spinner></Spinner>  

   const handleDelet=async(id)=>{
try{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async(result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      await axios.delete(`https://historical-artifacts-tracker-server-seven.vercel.app/artifacts/${id}`)
      refetch()
    }

  
  });



}catch{
toast.error('somethins is wrong')
}
   }



    return (
        <div>

            {artifact?.length? <div className="overflow-x-auto">
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
        <Link to={`/update/${art._id}`}><CiEdit className="hover:cursor-pointer" /></Link>
            <MdAutoDelete onClick={()=>handleDelet(art._id)} className="hover:cursor-pointer text-red-500" />
            </div>
        </td>
    
      </tr>)}
     
    
     
     
    </tbody>
   
  </table>
</div>
        :
        <Nodata></Nodata>    
        }
           
        </div>
    );
};

export default MyArtifacts;