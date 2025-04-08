import React, { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'

import { FcGoogle } from 'react-icons/fc'
import { IoIosClose } from 'react-icons/io'
import { ContextApi } from '../helper/ContextApi'


const Signup = () => {
  let { usertoggle,setusertoggle}=useContext(ContextApi)
  
  return (
    // signup form
<div className={`fixed top-0 left-0 w-full h-screen bg-black/40 z-50 ${usertoggle?"grid":"hidden"} place-items-center`}>
    <div className='lg:w-[30%] md:w-[50%] w-[90%] bg-white grid place-items-center rounded-2xl relative'>
    <div className='text-center p-3 '>
      <h2 className='text-2xl '>Create your account</h2> 
      <p className='text-[#B6B7BF]'>Welcome! Please fill in the details to get started.</p> 
    </div>
    <div className=' w-full flex gap-3.5 items-center justify-center'>
<button className=' w-[40%] flex  items-center justify-center gap-2 px-6 py-0.5 text-md border-black/20 border rounded-md hover:bg-gray-200 '><span><FaGithub /></span>Github</button>
<button  className='  justify-center w-[40%] flex  items-center gap-2 px-6 py-0.5 text-md border-black/20  border rounded-md hover:bg-gray-200'><span><FcGoogle /></span>Google</button>
    </div>
    <div className="mt-10  w-full ">
          <form action="#" method="POST" className="space-y-6 px-3 w-full" >
            <div className='w-full'>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2 w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className='w-full'>
              <div className="flex items-center justify-between w-full">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm w-full">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 w-full">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 border-t text-gray-500 p-2 bg-gray-300 w-full ">
          Already have an account?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
             Sign in
            </a>
          </p>
          <p className=" text-center text-sm/6 border-t text-gray-500 p-2 bg-white w-full ">
          Secured by{' '}
            clerk
          </p>
        </div>
        <div className='absolute right-[10px] top-[10px] cursor-pointer' onClick={()=>{
            setusertoggle(!usertoggle)
          }}>
          <span className='text-3xl '><IoIosClose /></span>
        </div>
</div>
</div>
  )
}

export default Signup