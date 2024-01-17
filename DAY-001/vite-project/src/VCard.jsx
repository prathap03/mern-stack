import { motion } from 'framer-motion'
import React,{useState} from 'react'
import { Tilt } from 'react-tilt'

function VCard() {
    const [isFlipped,setIsFlipped] = useState(false)
    const [isAnimating,setIsAnimating] = useState(false)
    const [studentDetails,setStudentDetails] = useState([{id:1,name:'Joe Prathap. P. J',dept:'IT',batch:'2021-2025',rollNo:'2105043'}])

    const handleFlip = ()=>{
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div className='flex items-center justify-center flex-grow gap-10 bg-black'>
       {studentDetails.map((student,index)=>{
        return (
            <Tilt key={student.id} className='bg-white  relative hover:rotate-y-50 min-h-[34rem] flex flex-col rounded-md shadow-md shadow-gray-200 min-w-[20rem]'>
            <motion.div onClick={()=>handleFlip()} className='z-10 flex flex-col flex-grow duration-500'>
            <div className='w-[100%] flex flex-col rounded-t-md bg-[#66924b]'>
                <div className='w-[100%] flex justify-center items-center pt-2'>
                    <h1 className='font-semibold tracking-wider text-white font-serif text-[1.85rem]'>SRI RAMAKRISHNA</h1>
                </div>
                <div className='w-[100%] gap-1  pb-2  pl-1 pr-1  flex'>
                  <div className='flex overflow-hidden items-center h-[4.2rem] w-[4.2rem] justify-center bg-white rounded-full '>
                    <img src="/snr.jpg" className='w-[100%] h-[100%] object-cover' alt="" />
                  </div>

                  <div className='flex flex-col h-[100%]   items-center justify-center flex-grow text-white '>
                   <h1 className='font-medium text-[1.65rem] font-serif'>Engineering College</h1>
                   <h1 className='text-[1.2rem]  font-serif'>Coimbatore - 641 022</h1>
                  </div>

                  <div className='flex overflow-hidden items-center h-[4.2rem] w-[4.2rem] justify-center bg-white rounded-full '>
                  <img src="/srec.jpeg" className='w-[100%] h-[100%] object-cover' alt="" />
                  </div>
                </div>
            </div>

            <div className='w-[100%] flex flex-col bg-[#e6e6e3] flex-grow'>
                <div className='flex w-[100%] p-1 justify-center items-center'>
                    <h1 className='font-semibold tracking-wide text-[1.6rem]'>STUDENT</h1>
                </div>
                <div className='flex justify-center gap-2 p-2 '>
                    <div className='w-[10rem] h-[12rem] overflow-hidden rounded-md bg-white justify-center items-center flex shadow-md outline outline-[0.001rem] outline-gray-300'>
                        <img src="/passport.jpg" className=' object-cover w-[100%] h-[100%]' alt="" />
                    </div>

                    <div className='w-[8rem] flex flex-col gap-2 h-[10rem] rounded-md font-semibold text-[1.45rem] justify-center   shadow-sm'>
                        <h1>{student.rollNo}</h1>
                        <h1>{student.dept}</h1>
                        <h1>{student.batch}</h1>
                    </div>
                </div>

               <div className='flex items-center justify-center font-semibold tracking-wide text-[1.8rem]'>
               <h1 className='uppercase'>{student.name}</h1>

               </div>
      
            </div>

            <div className='w-[100%]  relative overflow-hidden h-[12rem]   rounded-b-md bg-[#e6e6e3] flex-grow'>
              
                <img src="banner.png" className='w-[100%] mt-5 h-[100%] object-cover' alt="" />
                
                <div className='absolute top-0 flex flex-grow bg-[#e6e6e3]/[45%] bg-blur-sm min-w-[100%] min-h-[100%]'/>
                
                <div className='absolute z-50 flex flex-col items-center justify-center top-10 right-5 '>
                    <div className='h-[2rem] w-[8rem] flex justify-center items-center'>
                    <img src="principal.png" className=' bg-blend-darken' alt="" />
                    </div>
                    <h1 className='text-[1rem] font-semibold'>Principle</h1>
                </div>

            </div>

            
            </motion.div>

            <motion.div onClick={()=>handleFlip()} className='absolute rotate-y-180  backface-hidden  z-5 top-0 left-0 w-[100%] h-[100%] bg-[#66924b]/[50%] backdrop-blur-sm rounded-md shadow-md shadow-gray-200' ></motion.div>
        </Tilt>
        
        )
       })}
    </div>
  )
}

export default VCard