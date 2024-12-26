import {  useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSolidLike } from "react-icons/bi";
import { GrValidate } from "react-icons/gr";
import { LuUserPen } from "react-icons/lu";
import { MdTypeSpecimen } from "react-icons/md";
import { TbLocationCheck, TbTournament } from "react-icons/tb";
import { useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import UseAuth from "../hooks/UseAuth";
import { HiHandThumbUp, HiOutlineHandThumbUp } from "react-icons/hi2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ArtDeatils = () => {
const [like,setLike]=useState({})
  const { id } = useParams()
  const {user}=UseAuth()
  const axiousSecure=useAxiosSecure()



  const { data, refetch, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      try {
        const result = await axiousSecure.get(`/artifacts/${id}?email=${user?.email}`)
        return result.data
      }
      catch {
        toast.error('something is wrong')
      }
    }
  })

  useEffect(() => {
    refetch()
    axiousSecure.get(`/likeCount/${id}?email=${user?.email}`)
    .then(res=>{
      setLike(res.data)
    })

  }, [like,user])
  if (isLoading) return <Spinner></Spinner>

  const { name, img, ArtType, count, context, created, dis, disBy, location, } = data || {}

  // handle dislike
  const handleLikeStatus = async () => {
  
    const actionData={email:user?.email,art_id:id,name,img,disBy}
    const result=await axios.post('https://historical-artifacts-tracker-server-seven.vercel.app/likeCount',actionData)

   
    console.log(result)
   

    
 

  }

  return (
    <div className="sm:px-6 mt-5">
      <div className="bg-deatailsImg bg-cover bg-center border-red-600 border-2 flex justify-center items-center h-[340px] bg-no-repeat px-6">
        <h1 className="text-3xl font-bold text-white">Independent Japanese Antiquity</h1>
      </div>


      <div className="sm:w-10/12 border-2 md:p-5 lg:p-10 rounded-md border-white mx-auto mt-5  ">
        <div className=" flex gap-3 flex-col lg:flex-row-reverse">
          <div className="flex-1 ">
            <img
              src={img}
              className=" w-full h-full rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1 flex justify-center flex-col rounded-md sm:p-5 p-4 bg-[#302E2F]">
            <div>
              <h1 className="text-2xl text-white font-bold">Artifact Name</h1>
              <span className="text-[#a19b9d] text-xl flex items-center gap-2"><TbTournament />{name}</span>
              <div className="divider max-w-72"></div>
            </div>
            {/* type */}

            <div>
              <h1 className="text-2xl text-white font-bold">Artifact Type </h1>
              <span className="text-[#a19b9d] text-xl flex items-center gap-2"><MdTypeSpecimen />{ArtType}</span>
              <div className="divider max-w-72"></div>
            </div>
            {/* created at*/}
            <div>
              <h1 className="text-2xl text-white font-bold">Created at </h1>
              <span className="text-[#a19b9d] text-xl flex items-center gap-2"><GrValidate />{created}</span>
              <div className="divider max-w-72"></div>
            </div>
            {/* created year*/}
            <div>
              <h1 className="text-2xl text-white font-bold">Created year </h1>
              <span className="text-[#a19b9d] text-xl flex items-center gap-2"><GrValidate />{dis}</span>
              <div className="divider max-w-72"></div>
            </div>
            {/* discoverd by*/}
            <div>
              <h1 className="text-2xl text-white font-bold">Created By</h1>
              <span className="text-[#a19b9d] text-xl flex items-center gap-2"><LuUserPen />{disBy}</span>
              <div className="divider max-w-72"></div>
            </div>
            {/* location */}
            <div>
              <h1 className="text-2xl text-white font-bold">Location</h1>
              <span className="text-[#a19b9d] text-xl flex items-center gap-2"><TbLocationCheck />{location}</span>
              <div className="divider max-w-72"></div>
            </div>

          </div>
        </div>
        {/* description */}
        <div className="mt-10 ">
          <h1 className="text-3xl font-bold text-white">Details About Event : </h1>
          <p className="text-white mt-10">{context}</p>
        </div>
       <div className="flex gap-5 items-center">
     

          <span className="text-gray-700 mt-6 text-4xl flex gap-2 items-center">
       {/* <BiSolidLike ></BiSolidLike> */}
       <HiHandThumbUp onClick={() => {  handleLikeStatus() }} className={`hover:cursor-pointer ${like?'bg-blue-600 p-1 text-white w-9 h-10 rounded-full':'text-white'}   text-5xl`} />
      
        {count} likes
        
          </span>
       
  
       </div>
      </div>

    </div>
  );
};

export default ArtDeatils;