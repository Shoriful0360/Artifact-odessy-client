import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import OurVenus from "../component/OurVenus";
import toast from "react-hot-toast";
import axios from "axios";
import Card from "../component/Card";
import ArtifactCard from "../component/ArtifactCard";
import Spinner from "../component/Spinner";


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
           <ArtifactCard artifacts={artifacts}></ArtifactCard>
   

 
        </div>
    );
};

export default Home;