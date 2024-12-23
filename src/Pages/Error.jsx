import Lottie from 'lottie-react';
import errImg from '../../src/assets/Lottile_animation/error/Animation - 1734971727714.json';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Lottie animationData={errImg}></Lottie>

          <Link to={'/'} className='flex justify-center'>  <button className='btn btn-error'>GO BACK</button></Link>
        </div>
    );
};

export default Error;