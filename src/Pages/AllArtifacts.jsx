import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Card from "../component/Card";


const AllArtifacts = () => {
    const { isPending, error, data:artifacts } = useQuery({
        queryKey: ['artifacts'],
        queryFn: async() =>{
          const result=  await axios.get('http://localhost:5000/allArtifact')
          return result.data
        }
        //   fetch('http://localhost:5000/allArtifact').then((res) =>
        //     res.json(),
        //   ),
          

      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message

console.log(artifacts)
    return (
        <div>
           <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2">
           {
                artifacts?.map(art=><Card key={art._id} artifact={art}></Card>)
            }
           </div>
        </div>
    );
};

export default AllArtifacts;