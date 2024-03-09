import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    

    <section className='flex justify-center items-center w-[100%] h-[100vh] bg-gradient-to-r from-green-400 to-blue-500'>

        <form action="" className='flex items-start flex-col gap-4 w-[400px] mx-4 sm:mx-0'>

            <h2 className='font-bold text-[40px]'>Login</h2>

            <input type="text" placeholder='Enter Email' name='email' className='indent-4 rounded-lg border-gray-500 w-[100%] h-[35px] outline-none' />

            <input type="password" placeholder='Enter Password' name='password' className='indent-4 rounded-lg border-gray-500 w-[100%] h-[35px] outline-none'/>

            <button className='indent-4 rounded-lg border-gray-500  h-[35px] pr-4 font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 outline-none'>Register</button>

            <p>Don't have an Account ? <Link to='/registration' className='font-bold'> Sign Up </Link></p>

        </form>



    </section>

  )
}

export default Login
