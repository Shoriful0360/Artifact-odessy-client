import { BiLike } from "react-icons/bi";
import { HiHandThumbUp } from "react-icons/hi2";
import { Link } from "react-router-dom";




const Card = ({artifact}) => {
    const{name,img,context,count,_id,disBy}=artifact
    
    return (
      <div  data-aos="zoom-out-left"  className=" hover:scale-[1.05] transition-all rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={img} alt={`${name}`} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2 text-sm">{context.substring(0,70)}...</p>
        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-3">
            <p>{count}</p>
          <HiHandThumbUp className={`hover:cursor-pointer w-10 h-10 rounded-full bg-blue-500 text-white p-1 text-5xl`} />
          </div>
        
       <Link to={`/details/${_id}`}>
       <button
            className=" custom-btn btn-1 "
            
          >
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};
   
export default Card;