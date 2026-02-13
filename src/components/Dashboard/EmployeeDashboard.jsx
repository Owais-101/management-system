import React from 'react'

const EmployeeDashboard = () => {
    return (
        <div className='w-full h-screen  bg-blue-200' >

            <div className='h-[40%] pt-20 px-10 ' >

                <div className='flex justify-between mb-10' >
                    <h1>Hello, <br /> <span className='text-3xl font-bold' >Owais</span> 👋</h1>

                    <button className='px-10 py-4 bg-red-400 text-white font-bold rounded-xl' >LogOut</button>
                </div>
                {/* task info div */}
                <div className=' w-full  flex justify-between' >
                    <div className='p-20 rounded-2xl bg-blue-300 h-fit w-fit' >
                        <h1 className='font-extrabold text-2xl text-white'>0</h1>
                        <p className='font-semibold text-white'>New Task</p>
                    </div>

                </div>

            </div>

            <div id='container' className=' mt-14 pb-14 px-5 flex flex-nowrap shrink-0 overflow-x-auto gap-10' >

                <div className='w-96 h-96 rounded-2xl bg-yellow-100 shrink-0 ' >
                    <div className='flex justify-between p-10 ' >
                        <h1 className='py-2 px-6 rounded-xl inline-block bg-red-400 text-bold text-white' >High</h1>
                        <p className='text-xl font-extrabold text-blue-600' >24 Feb 2026</p>
                    </div>
                </div>
        
            </div>

        </div>
    )
}

export default EmployeeDashboard