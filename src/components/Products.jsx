import React from 'react'
import abt from '../assets/pana.png'
import img from '../assets/img8.png';

const Products = () => {
  return (
    <div>
      {/*  about text */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
               <div>
                <img src={abt} alt="" className='h-80 w-80'/>
               </div>
               <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-gray-600 font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                    <p className='md:w-3/4 text-sm text-gray-600 mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='btn-primary'>Learn More</button>
               </div>
          </div>
       </div>

       {/* Company stats */}
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-gray-300 py-16'>
         <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/3'>
                <img src={img} alt="" className='h-48 max-h-full md:max-h-screen ml-16'/>
            </div>

            {/* stats */}
              <div className='md:w-2/3 mx-auto'>
                <div>
                    <p className='md:w-4/5 text-sm text-gray-600 mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h5 className='text-green-400 text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p className='text-base text-neutral-600 mb-8'>British Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src="/src/assets/CompanyIcon/c1.png" alt="" className='cursor-pointer'/>
                            <img src="/src/assets/CompanyIcon/c2.png" alt="" className='cursor-pointer'/>
                            <img src="/src/assets/CompanyIcon/c3.png" alt="" className='cursor-pointer'/>
                            <img src="/src/assets/CompanyIcon/c4.png" alt="" className='cursor-pointer'/>
                            <img src="/src/assets/CompanyIcon/c5.png" alt="" className='cursor-pointer'/>
                            <img src="/src/assets/CompanyIcon/c6.png" alt="" className='cursor-pointer'/>
                            <div className='flex items-center gap-8'>
                                <a href="/"  className='font-bold text-green-400 hover:text-neutral-700'>Meet all customers <svg width="17" height="11" viewBox="0 0 17 11" fill="none" className='inline-block ml-2'>
                                    <path d="M8.02324 3.24222L9.12263 2.14283C9.25301 2.01245 9.25301 1.80106 9.12263 1.67068L8.02324 0.571289M9.02484 1.90676L4.35071 1.90676" stroke="#4CAF4F"/></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
         </div>
       </div>
    </div>
  );
};

export default Products
