import Lottie from 'lottie-react';
import noData from '../../src/assets/Lottile_animation/Nodata/Animation - 1734970626880.json'

const Nodata = () => {
    return (
        <div className='sm:w-8/12 mx-auto'>
           <Lottie animationData={noData}></Lottie> 
           <h1 className='text-4xl font-bold text-center'>Please Add Data</h1>
        </div>
    );
};

export default Nodata;