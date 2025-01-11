import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import OurVenus from "../component/OurVenus";
import toast from "react-hot-toast";
import axios from "axios";
import Card from "../component/Card";
import ArtifactCard from "../component/ArtifactCard";
import Spinner from "../component/Spinner";
import CountTrap from "../component/CountTrap";
import { Link } from "react-router-dom";
import WritersWanted from "../component/WritersWanted";


const Home = () => {
const [artifacts,setArtifacts]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try{
const {data}=await axios.get('https://historical-artifacts-tracker-server-seven.vercel.app/artifacts',)
setArtifacts(data)
        }catch{
            toast.error('something is wrong')
        }
    }

 
    return (
        <div>
           <Banner></Banner> 
           <OurVenus></OurVenus>
           <CountTrap></CountTrap>
           <ArtifactCard artifacts={artifacts}></ArtifactCard>

           <div className="flex justify-center">
         <Link to={'/allArts'}>  <button className="my-4 custom-btn btn-2">See all </button></Link>
           </div>

           <WritersWanted></WritersWanted>
   

 
        </div>
    );
};

export default Home;