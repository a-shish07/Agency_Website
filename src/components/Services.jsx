import React from 'react'

const Services = () => {
    const services = [
        {id:1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments",image: '/src/assets/Iconn.png' },
        {id:2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments",image: '/src/assets/Icon (1).png' },
        {id:3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments",image: '/src/assets/Icon (2).png' }
    ];
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-gray-600 font-semibold mb-2'>Our Clients</h2>
            <p className='text-gray-600'>We have been working with some Fortune 500+ clients</p>

            {/* Company logos */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src="/src/assets/CompanyIcon/c1.png" alt="" />
                <img src="/src/assets/CompanyIcon/c2.png" alt="" />
                <img src="/src/assets/CompanyIcon/c3.png" alt="" />
                <img src="/src/assets/CompanyIcon/c4.png" alt="" />
                <img src="/src/assets/CompanyIcon/c5.png" alt="" />
                <img src="/src/assets/CompanyIcon/c6.png" alt="" />
                <img src="/src/assets/CompanyIcon/c7.png" alt="" />
            </div>
        </div>

        {/* services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-gray-600 font-semibold mb-3'>Manage your entire community in a single system</h2>
            <p className='text-gray-600'>Who is Nextcent suitable for?
            </p>
        </div>

        {/* Cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto map-12'>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-88 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-f'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'> <img src={service.image} alt="" className='-ml-5'/></div>
                        <h4 className='text-2xl font-bold text-gray-500 mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-gray-400'>{service.description}</p>
                    </div>
                </div> )
            }
        </div>
    </div>
  )
}

export default Services
