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
        {/* <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Your Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
        </form> */}
      </div>
    </div>
  </div>
  )
}

export default Contact