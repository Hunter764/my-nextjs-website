import React from 'react'

const AboutPage = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Us</h1>
        <p className='text-4xl text-gray-600'>Learn more about our story and what drives us Forward.</p>

        <div className='prose prose-lg mx-auto mt-5'> 
          <div className='bg-white rounded-lg shadow-sm border p-8 mb-8 border-gray-200'>
           <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Our Story</h2> 

           <p className='text-gray-600 mb-4 '>
            Founded in 2026, our mission is to create beautiful and functional web experiences that delight users and drive business success.
           </p>
           <p className='text-gray-600 mt-5'>
            Our team is passionate about web development and design, and we strive to stay at the forefront of industry trends and technologies.
           </p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          <div className='bg-white rounded-lg shadow-sm border p-6 border-gray-200'>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Our Mission</h3>
            <p className='text-gray-600'>
              To deliver high-quality web solutions that empower businesses to succeed online.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-sm border p-6 border-gray-200'>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>Our Vision</h3>
            <p className='text-gray-600'>
              To be a leading web development agency known for innovation, creativity, and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage