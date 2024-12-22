
import toast from "react-hot-toast";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddArtifacts = () => {
    const navigate=useNavigate()
const {user}=UseAuth()
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
        const adderName=form.adderName.value;
    
     const formData={name,img,count:0,ArtType,context,created,dis,disBy,location,adderName,adderEmail:user?.email}
     console.log(formData)


 
     try{
 await axios.post('http://localhost:5000/artifacts',formData)

    toast.success('added successfully')
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
                                <input type="text" name='name' placeholder="Enter your Artifac name" className="input input-bordered w-full " required />
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact Image</span>
                                </label>
                                <input type="url" name='img' placeholder="Enter your Artifac img url" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact Type</span>
                                </label>
                             
                                <select name="ArtType" className="select  input-bordered  w-full ">
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
                                    name="context"
                                    placeholder="Historical Context"
                                    className="textarea textarea-bordered textarea-xs w-full "></textarea>
                               

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Created At</span>
                                </label>
                                <input type="text" name='created' placeholder="Enter Created At " className="input w-full input-bordered" required />
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Discovered </span>
                                </label>
                                <input type="text" name='dis' placeholder="Enter Discovered  year" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Discovered By</span>
                                </label>
                                <input type="text" name='disBy' placeholder="Enter Discovered By " className="input w-full input-bordered" required />


                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Present Location</span>
                                </label>
                                <input type="text" name='location' placeholder="Enter Present Location" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact adder name</span>
                                </label>
                                <input type="text" name='adderName' placeholder="Enter Artifact adder name" className="input w-full input-bordered" required />


                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Artifact adder email</span>
                                </label>
                                <input type="email" name='adderEmail' 
                                value={user?.email}
                                disabled
                                placeholder="Enter Artifact adder email" className="input w-full input-bordered" required />


                            </div>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn bg-[#D2B48C]">Add Artifac</button>
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

export default AddArtifacts;