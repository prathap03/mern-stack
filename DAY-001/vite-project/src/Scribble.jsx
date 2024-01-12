import React from 'react'

function Scribble() {
  return (
    <div className='flex justify-center bg-blue-400 p-[2rem] items-center flex-col min-h-[100%] flex-grow'>
        <div className='flex flex-col min-h-[50%] flex-grow p-2 min-w-[90%]'>
            <div className='flex w-[100%] h-max p-2 text-[2rem] font-semibold text-white bg-red-500'>
                Skribble.io
            </div>
            <div className='flex w-[100%] gap-1 bg-white/[70%] backdrop-blur-md p-1'>
                <div className='flex gap-1 w-[14%] justify-evenly p-2 items-center text-[1.4rem]  bg-white rounded-md shadow-md'>
                    <div>
                        10
                    </div>
                    <h1>
                        Round 1 of 3
                    </h1>
                </div>
                <div className='flex items-center text-[1.4rem] font-semibold justify-center flex-grow bg-white rounded-md shadow-md'>
                    waiting...
                </div>
                <div className='flex items-center text-[1.4rem] font-semibold justify-end pr-1 w-[20.2%] bg-white rounded-md shadow-md'>
                    settings
                </div>
            </div>
            <div className='flex-grow gap-2 flex mt-2 p-2 bg-white/[60%] backdrop-blur-md rounded-md shadow-sm'>
                <div className='flex min-w-[14%] min-h-[100%] bg-white'>

                </div>

                <div className='flex  flex-grow min-w-[14%] min-h-[100%] bg-white'>

</div>

<div className='flex  min-w-[20%] min-h-[100%] bg-white'>

</div>

            </div>
            <div className='flex items-center text-white font-semibold text-[1.8rem] justify-center mt-2 p-2 bg-white/[60%] backdrop-blur-md rounded-md shadow-sm'>
                Invite your friends!
            </div>
            <div className='flex items-center text-white font-semibold text-[1.8rem] justify-center mt-2 p-2 bg-white/[60%] backdrop-blur-md rounded-md shadow-sm'>
                <div className='flex flex-grow h-[3rem] justify-center items-center'>
                    <input value={""} placeholder='Hover to copy link' className='text-blue-500 text-[1rem] text-center p-2 h-[100%] w-[50%]' type="text" />
                    <button className='p-2 text-[1rem] h-[100%] bg-blue-500'>Copy</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scribble