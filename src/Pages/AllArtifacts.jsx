import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../component/Card";
import Spinner from "../component/Spinner";



const AllArtifacts = () => {
  const [search, setSearch] = useState('')


  const { isPending, error, data: artifacts, refetch } = useQuery({
    queryKey: ['artifacts'],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5000/art?search=${search}`)
      return result.data
    }

  })
  useEffect(() => {
    refetch()
  }, [search])

  if (isPending) return <Spinner></Spinner>

  if (error) return 'An error has occurred: '


  return (
    <div>
      <div className="my-5 flex justify-center">
        <label className="input input-bordered max-w-72  flex items-center gap-2">
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </div>

      <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2">
        {
          artifacts?.map(art => <Card key={art._id} artifact={art}></Card>)
        }
      </div>
    </div>
  );
};

export default AllArtifacts;