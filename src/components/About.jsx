import React from 'react';
import ZethembeMe from '../assets/ZethembeMe.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
       <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    
       <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
         
          <div></div>
            </div>
           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
           <div className="sm:text-right text-4xl font-bold">
  <img
    src={ZethembeMe}
    alt="Zethembe Nxumalo"
    className="w-48 h-48 rounded-full mx-auto object-cover transform -translate-x-4"
  />
</div>

            <div className="ml-4" >
              <p>I’m a young, passionate programmer focused on data, automation, and coding solutions that improve everyday life. I strive to build software that makes a real difference for people and businesses alike.</p>  
            </div>
          </div>
      
      </div>
 
        </div>
     );
};

export default About;
