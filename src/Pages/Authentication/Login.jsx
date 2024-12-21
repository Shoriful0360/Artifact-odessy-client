import Lottie from 'lottie-react';
import login_animate from '../../assets/Lottile_animation/login/Animation - 1733908240352.json'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
      
    }
    return (
        <div className="mt-10">
        <h1 className="text-center text-4xl font-bold">LogIn Now</h1>
        <div className="hero ">
    <h1 className="text-red-800">heool</h1>
<div className="hero-content flex-col lg:flex-row-reverse">

<div className=" lg:text-left ">
 
 <Lottie className="w-80" animationData={login_animate}></Lottie>
</div>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleFormSubmit} className="card-body">
 
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
      <button className="btn btn-primary">Login</button>
    </div>
  </form>
  <div className='my-2'>
    <h1>Don't have an accoutn? <Link to={'/register'}><span className='text-blue-400 text-xl font-semibold'>Register</span></Link></h1>
  </div>
</div>
</div>
</div>
      </div>
    );
};

export default Login;