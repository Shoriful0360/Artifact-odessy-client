import Lottie from "lottie-react";
import Register_animate from '../../assets/Lottile_animation/register/Animation - 1733897648525 (1).json'

const Register = () => {
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
       
    
      }
    return (
        <div className="mt-10">
        <h1 className="text-center text-4xl font-bold">Register Now</h1>
        <div className="hero ">
    <h1 className="text-red-800">heool</h1>
<div className="hero-content flex-col lg:flex-row-reverse">

<div className=" lg:text-left ">
 
 <Lottie className="w-80" animationData={Register_animate}></Lottie>
</div>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleFormSubmit} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="text" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
</div>
</div>
</div>
      </div>
    );
};

export default Register;