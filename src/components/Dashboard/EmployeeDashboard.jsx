import React from 'react'

const EmployeeDashboard = ({ employeeData }) => {

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "bg-green-500";
            case "pending":
                return "bg-yellow-400";
            case "completed":
                return "bg-blue-500";
            case "failed":
                return "bg-red-500";
            default:
                return "bg-gray-300";
        }
    };

    const getborderColor = (status) => {
        switch (status) {
            case "active":
                return "border-green-600";
            case "pending":
                return "border-yellow-600";
            case "completed":
                return "border-blue-600";
            case "failed":
                return "border-red-600";
            default:
                return "border-gray-300";
        }
    };

    return (
        <div className='w-full h-screen  bg-blue-200 border-gree' >

            <div className='h-[40%] pt-20 px-10 ' >

                <div className='flex justify-between mb-10' >
                    <h1>Hello, <br /> <span className='text-3xl font-bold' >{employeeData.name}</span> 👋</h1>

                    <button className='px-10 py-4 bg-red-400 text-white font-bold rounded-xl' >LogOut</button>
                </div>
                {/* task info div */}
                <div className=' w-full  flex justify-between' >
                    <div className='p-20 rounded-2xl bg-blue-300 h-fit w-fit' >
                        <h1 className='font-extrabold text-2xl text-white'>{employeeData.tasks.length}</h1>
                        <p className='font-semibold text-white'>New Task</p>
                    </div>

                </div>

            </div>

            <div id='container' className=' mt-14 pb-14 px-5 flex flex-nowrap shrink-0 overflow-x-auto gap-10' >

                {employeeData?.tasks?.map((task, idx) => (
                    <div
                        key={idx}
                        className={`w-96 h-96 rounded-2xl ${getStatusColor(task.status)} shrink-0`}
                    >
                        <div className="flex justify-between p-10">
                            <div className='flex flex-col gap-5' >
                                <h1 className="py-2 px-6 rounded-xl inline-block bg-red-400 font-bold text-white">
                                    {task.category}
                                </h1>
                                <h1 className={`py-2 px-6 inline-block font-bold text-black w-fit bg-white/10 backdrop-blur-xl border-white/20 rounded-2xl shadow-2xl p-6 border-2
                                    ${getborderColor(task.status)}`}>
                                    {task.status}
                                </h1>
                            </div>

                            <p className="text-xl font-extrabold text-blue-600">
                                {task.taskDate}
                            </p>
                        </div>

                        <div className="px-10">
                            <h2 className="text-2xl font-bold">{task.taskTitle}</h2>
                            <p>{task.taskDescription}</p>
                        </div>
                    </div>
                ))}


            </div>

        </div >
    )
}

export default EmployeeDashboard