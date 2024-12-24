import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";




const UpdateArt = () => {
const {user}=UseAuth()
 const data=useLoaderData()

 const {name,img,ArtType,context,created,dis,disBy,location,adderName,adderEmail,count,_id}=data

const navigate=useNavigate()


    const handleFormSubmit=async(e)=>{
        e.preventDefault()
  
  const form=e.target
  const name=form.name.value;
  const img=form.img.value;
  const ArtType=form.ArtType.value;
  const context=form.context.value;
  const created=form.created.value;
  const dis=form.dis.value;
  const disBy=form.disBy.value;
  const location=form.location.value;


const formData={name,img,ArtType,context,created,dis,disBy,location,adderName,adderEmail,count}



try{
await axios.put(`http://localhost:5000/artifacts/${_id}`,formData)

toast.success('update  successfully')
navigate('/')
}catch{
toast.error('something is wrong')
}

}

    return (
        <div className=' sm:w-10/12 mx-auto w-full '>
        <div className="">
            <div className="hero-content flex-col  lg:flex-row-reverse">

                <div className="card w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} className="input input-bordered w-full " required />
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact Image</span>
                                </label>
                                <input type="url" name='img' defaultValue={img} className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact Type</span>
                                </label>
                             
                                <select name="ArtType" defaultValue={ArtType} className="select   input-bordered  w-full ">
                                    <option disabled selected>What is the Artifac type</option>
                                    <option>tools</option>
                                    <option>Documents</option>
                                    <option>Weapons</option>
                                    <option>Writings</option>
                             
                                </select>
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Historical Context </span>
                                </label>
                                <textarea
                                defaultValue={context}
                                    name="context"
                               
                                    className="textarea textarea-bordered textarea-xs w-full "></textarea>
                               

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Created At</span>
                                </label>
                                <input type="text" name='created' defaultValue={created} className="input w-full input-bordered" required />
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Discovered </span>
                                </label>
                                <input type="text" name='dis'defaultValue={dis} className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Discovered By</span>
                                </label>
                                <input type="text" name='disBy' defaultValue={disBy} className="input w-full input-bordered" required />


                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Present Location</span>
                                </label>
                                <input type="text" name='location' defaultValue={location} className="input w-full input-bordered" required />

                            </div>
                        </div>
                      
                        <div className="form-control items-center mt-6">
                            <button  className="custom-btn btn-3">update </button>
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UpdateArt;