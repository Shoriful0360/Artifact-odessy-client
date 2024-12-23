import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";


const Card = ({artifact}) => {
    const{name,img,context,count,_id}=artifact
    return (
      <div className=" hover:scale-[1.05] transition-all rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={img} alt={`${name}`} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2 text-sm">{context.substring(0,70)}...</p>
        <div className="flex items-center justify-between mt-4">
        
       <Link to={`/details/${_id}`}>
       <button
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 text-sm rounded"
            
          >
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};
   
export default Card;