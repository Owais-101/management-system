import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const submitHandler = (e) => {
    e.preventDefault()
    
}

    return (
        <div className='h-screen w-full bg-gray-600 flex justify-center items-center ' >

            <div className='p-10 bg-amber-50 rounded-3xl'>
                <h1 className='text-5xl font-bold mb-40'>Log In</h1>

                <form onSubmit={(e) => {
                    submitHandler(e)
                }} >

                    <div className='flex flex-col gap-5'>

                        <input 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        type="text"
                        required
                         className='border-2 border-gray-700 px-10 py-4 rounded-xl '
                          placeholder='email' />

                        <input
                        onChange={((e) => {
                            setPassword(e.target.value);
                        })}
                        value={password}
                        required
                         type="password"
                          className='border-2 border-gray-700 px-10 py-4 rounded-xl '
                           placeholder='password' />

                    </div>

                    <button type='submit' className='block mx-auto border-2 border-green-600 bg-green-400 text-white px-20 py-3 rounded-2xl mt-5' >Sign In</button>

                </form>
            </div>

        </div>
    )
}

export default Login