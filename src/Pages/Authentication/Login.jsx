import Lottie from 'lottie-react';
import login_animate from '../../assets/Lottile_animation/login/Animation - 1733908240352.json'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';

const Login = () => {
  const {loginUser,setUser,googleLogin}=UseAuth()
  const navigate=useNavigate()

  // login form
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
console.log(email,password)
try{
const {user}=await  loginUser(email,password)
setUser(user)
toast.success('login successfull')
form.reset()
navigate('/')
}catch{

toast.error('Invalid email or password')
}  
    }

    // login with google
    const handleGoogle=async()=>{
try{
 const {user}=await googleLogin()
 setUser(user)
 toast.success('login is successfully')
 navigate('/')
}
catch{
toast.error('something is wrong')
}
    }
    return (
        <div className="mt-10">
        <h1 className="text-center text-4xl font-bold">LogIn Now</h1>
        <div className="hero ">
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
  <div className="divider">Log in with Google</div>
  <div className='flex justify-center'>
    <FcGoogle onClick={handleGoogle} className='text-5xl hover:cursor-pointer'/>
  </div>
</div>
</div>
</div>
      </div>
    );
};

export default Login;