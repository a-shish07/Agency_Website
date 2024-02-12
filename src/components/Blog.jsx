import React from 'react'

const Blog = () => {
    const blogs = [
        {id:1,title:"Creating Streamlined Safeguarding Processes with OneRen",image:"/src/assets/image 18.png"},
        {id:2,title:"What are your safeguarding responsibilities and how can you manage them?",image:"/src/assets/image 19.png"},
        {id:3,title:"Revamping the Membership Model with Triathlon Australia",image:"/src/assets/image 20.png"},
    ];
  return (
    <div className='px-4 lg:px-4 max-w-screen-2xl mx-auto my-12'>
       <div className='text-center md:w-1/2 mx-auto'>
         <h2 className='text-4xl text-neutral-600 font-semibold mb-4'>Caring is the new marketing</h2>
         <p className='text-sm text-neutral-600 mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
       </div>

       {/* all blogs */}
       <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between '>
        {
            blogs.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                <img src={blog.image} alt="" className='h-56  md:max-h-screen hover:scale-110 transition-all duration-300'/>
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0  top-16 w-64'>
                    <h3 className='mb-3 text-neutral-600 font-semibold'>{blog.title}</h3>
                    <div className='flex items-center gap-8'>
                                <a href="/"  className='font-bold text-green-400 hover:text-neutral-700'>ReadMore <svg width="17" height="11" viewBox="0 0 17 11" fill="none" className='inline-block ml-2'>
                                    <path d="M8.02324 3.24222L9.12263 2.14283C9.25301 2.01245 9.25301 1.80106 9.12263 1.67068L8.02324 0.571289M9.02484 1.90676L4.35071 1.90676" stroke="#4CAF4F"/></svg></a>
                            </div>
                </div>
            </div> )
        }
       </div>
    </div>
  );
};

export default Blog
