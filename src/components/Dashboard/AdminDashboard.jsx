import React from 'react'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full bg-gray-500 flex flex-col justify-center items-center' >

            <div className=' w-[80%] rounded-2xl ' >

                <form className='flex flex-col items-center justify-center'>
                    <input className='px-8 py-5 border-2 border-white bg-gray-800 text-white mb-3' type="text" placeholder='Task Title' />
                    <textarea className='px-20 py-10 bg-gray-800 mb-3 border-2 border-white text-white' placeholder='Detailed description'></textarea>
                    <input className='px-8 py-5 border-2 border-white bg-gray-800 text-white mb-3' type="date" />
                    <input className='px-8 py-5 border-2 border-white bg-gray-800 text-white mb-3' type="text" placeholder='Assign to (person name)' />
                    <input className='px-8 py-5 border-2 border-white bg-gray-800 text-white mb-3' type="text" placeholder='category' />
                    <button type='submit' className='mt-10 px-12 py-4 border-2 border-black bg-gray-600 rounded-xl text-white cursor-pointer '  >Create Task</button>
                </form>

            </div>

            <div className='w-full p-10 h-64 bg-amber-200 overflow-y-auto mt-10' >
                <div className=' text-2xl font-bold  h-15 w-full px-10 shrink-0 mb-4 bg-amber-400 rounded-2xl flex justify-between items-center ' >
                    <h1>Sarthak</h1>
                    <p>Make UI design</p>
                    <p>Status</p>
                </div>
                <div className=' text-2xl font-bold  h-15 w-full px-10 shrink-0 mb-4 bg-amber-400 rounded-2xl flex justify-between items-center ' >
                    <h1>Sarthak</h1>
                    <p>Make UI design</p>
                    <p>Status</p>
                </div>
                <div className=' text-2xl font-bold  h-15 w-full px-10 shrink-0 mb-4 bg-amber-400 rounded-2xl flex justify-between items-center ' >
                    <h1>Sarthak</h1>
                    <p>Make UI design</p>
                    <p>Status</p>
                </div>
                <div className=' text-2xl font-bold  h-15 w-full px-10 shrink-0 mb-4 bg-amber-400 rounded-2xl flex justify-between items-center ' >
                    <h1>Sarthak</h1>
                    <p>Make UI design</p>
                    <p>Status</p>
                </div>
                <div className=' text-2xl font-bold  h-15 w-full px-10 shrink-0 mb-4 bg-amber-400 rounded-2xl flex justify-between items-center ' >
                    <h1>Sarthak</h1>
                    <p>Make UI design</p>
                    <p>Status</p>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard
