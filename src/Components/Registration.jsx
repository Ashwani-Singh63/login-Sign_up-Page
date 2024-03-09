import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {


    let [userDetails,setUserDetails] = useState({
        name:"",
        email:"",
        password:"",
        age:""
    });


    function handleInput(event)
    {
        // collecting data from form feilds
        setUserDetails((prevDetails)=>{
            return {...prevDetails, [event.target.name] : event.target.value }
        });

    }

    function handleSubmit(event)
    {
        //preventing refresh
        event.preventDefault();

        console.log(userDetails);

    }


    return (
        

        <section className='flex justify-center items-center w-[100%] h-[100vh] bg-gradient-to-r from-green-400 to-blue-500'>

            <form onSubmit={handleSubmit} className='flex items-start flex-col gap-4 w-[400px] mx-4 sm:mx-0' autoComplete='off'>

                <h2 className='font-bold text-[40px]'>Sign up</h2>

                <input onChange={handleInput} required type="text" placeholder='Enter Name' name='name' className='indent-4 rounded-lg border-gray-500 w-[100%] h-[35px] outline-none' value={userDetails.name}/>

                <input onChange={handleInput} required type="text" placeholder='Enter Email' name='email' className='indent-4 rounded-lg border-gray-500 w-[100%] h-[35px] outline-none' value={userDetails.email} />

                <input onChange={handleInput} required type="password" placeholder='Enter Password' name='password' className='indent-4 rounded-lg border-gray-500 w-[100%] h-[35px] outline-none' value={userDetails.password}/>

                <input onChange={handleInput} required type="number" placeholder='Enter Age' name='age' className='indent-4 rounded-lg border-gray-500 w-[100%] h-[35px] outline-none' value={userDetails.age}/>

                <button className='indent-4 rounded-lg border-gray-500  h-[35px] pr-4 font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 outline-none'>Register</button>

                <p>Already Registered ? <Link to='/login' className='font-bold'> Login </Link></p>

            </form>



        </section>

    )
}

export default Registration
