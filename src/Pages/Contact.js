import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <div className="max-w-lg mx-auto p-4">
          <div className='bg-white p-8'>
            <h3 className='text-2xl font-bold text-center text-red-600'>General Inquiries</h3>
            <div className='flex py-4 gap-4 justify-center '>
              <div>
                <p className='font-bold text-gray-500'>+912239854983</p>
                <p className='text-gray-500 text-xs text-center'>Toll-free from India</p>
              </div>
              <div>
                <p className='font-bold text-gray-500'>+913239854983</p>
                <p className='text-gray-500 text-xs text-center'>Toll-free from India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact