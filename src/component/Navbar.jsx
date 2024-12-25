import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const Navbar = () => {
  const{user,logOut}=UseAuth()

    return (
        <div className='navbar bg-base-100 shadow-sm container  mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={"logo"} alt='' />
          <span className='font-bold'>Artifact Odyssey</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/allArts'>All Artifacts</Link>
          </li>
          <li>
            <Link to='/addArtifact'>Add Artifacts</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={`${user?.photoURL}`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/myArtifacts' className='justify-between'>
                My Artifacts
                </Link>
              </li>
              <li>
                <Link to={'/myLike'}>Liked Artifacts</Link>
              </li>
             
             
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    );
};

export default Navbar;