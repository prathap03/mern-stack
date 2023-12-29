import React from 'react'

export default function PortfolioInfoBar() {
  return (
    
    <div className="hidden md:flex flex-col items-center p-[4rem] h-max   bg-white min-w-[15%]">
    <div className="relative hover:animate-spin transition-all  shadow-md rounded-full  h-[9.3rem] w-[9.3rem]">
      <img
        src="passport.jpg"
        alt=""
        className="rounded-full h-[9.3rem] w-[9.3rem]"
      />
      <div className="bg-[#7EB942] absolute rounded-full bottom-1 right-[1.5rem] h-[1rem] w-[1rem]"></div>
    </div>

    <div className="mt-[2rem] flex flex-col justify-center gap-1 items-center">
      <p className="font-[500] text-[1.1225rem]">Joe Prathap P J</p>
      <p className="font-[400] text-[#767676] text-[0.938rem]">
        Font-end Developer
      </p>
    </div>
    <div className="flex h-[2rem] justify-evenly mt-3 w-[130%]">
      <div className="min-h-2rem flex justify-center items-center bg-[#FFB400] rounded-full w-[2rem]">
        <img src="/icons/fb.png" alt="" />
      </div>
      <div className="min-h-2rem flex justify-center items-center bg-[#FFB400] rounded-full w-[2rem]">
        <img src="/icons/x.png" className="rotate-90 " alt="" />
      </div>
      <div className="min-h-2rem flex justify-center items-center bg-[#FFB400] rounded-full w-[2rem]">
        <img src="/icons/ig.png" alt="" />
      </div>
      <div className="min-h-2rem flex justify-center items-center bg-[#FFB400] rounded-full w-[2rem]">
        <img src="/icons/li.png" alt="" />
      </div>
    </div>
    <div className="flex bg-[#F0F0F6] shadow-md mt-5 h-[0.1rem] w-[120%]"></div>

    <div className="flex gap-2  mt-3 flex-col  w-[120%]">
      <div className="flex items-center justify-between">
        <p className="p-1 bg-[#FFB400] text-[0.938rem] font-[400]">Age:</p>
        <p>20</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="p-1 bg-[#FFB400] text-[0.938rem] font-[400]">
          Residence:
        </p>
        <p>IN</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="p-1 bg-[#FFB400] text-[0.938rem] font-[400]">
          Freelance:
        </p>
        <p className="text-[#7EB942]">Available</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="p-1 bg-[#FFB400] text-[0.938rem] font-[400]">
          Address:
        </p>
        <p>Theni, TN</p>
      </div>
    </div>

    <div className="flex bg-[#F0F0F6] shadow-md mt-5 h-[0.1rem] w-[120%]"></div>

    <p className="text-[1.125] w-[120%] mt-2 font-[500]">Languages</p>
    <div className="flex flex-col gap-1 w-[120%] mt-1">
      <div className="flex flex-col">
        <div className="flex justify-between items-center font-[400] text-[#767676]">
          <p>Tamil</p>
          <p>100%</p>
        </div>
        <div className=" outline-2  outline-yellow-500  w-[100%]  h-[1rem] overflow-hidden">
          <div className="bg-yellow-500  rounded-full  w-[100%] h-[18%]"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex font-[400] text-[#767676] items-center justify-between">
          <p>English</p>
          <p>85%</p>
        </div>
        <div className=" w-[100%]   outline-yellow-500   h-[1rem] overflow-hidden">
          <div className="bg-yellow-500 rounded-full   w-[85%] h-[18%]"></div>
        </div>
      </div>
    </div>

    <div className="flex bg-[#F0F0F6] shadow-md mt-5 h-[0.1rem] w-[120%]"></div>

    <p className="text-[1.125] w-[120%] mt-2 font-[500]">Skills</p>
    <div className="flex flex-col gap-1 w-[120%] mt-1">
      <div className="flex flex-col">
        <div className="flex items-center font-[400] text-[#767676] justify-between">
          <p>HTML</p>
          <p>90%</p>
        </div>
        <div className=" outline-2   outline-yellow-500  w-[100%]  h-[1rem] overflow-hidden">
          <div className="bg-yellow-500  rounded-full  w-[90%] h-[18%]"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center font-[400] text-[#767676] justify-between">
          <p>CSS</p>
          <p>85%</p>
        </div>
        <div className=" w-[100%]   outline-yellow-500   h-[1rem] overflow-hidden">
          <div className="bg-yellow-500 rounded-full   w-[85%] h-[18%]"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center font-[400] text-[#767676] justify-between">
          <p>Js</p>
          <p>80%</p>
        </div>
        <div className=" w-[100%]   outline-yellow-500   h-[1rem] overflow-hidden">
          <div className="bg-yellow-500 rounded-full   w-[80%] h-[18%]"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center font-[400] text-[#767676] justify-between">
          <p>PHP</p>
          <p>75%</p>
        </div>
        <div className=" w-[100%]   outline-yellow-500   h-[1rem] overflow-hidden">
          <div className="bg-yellow-500 rounded-full hover:w-[100%] hover:bg-green-400 duration-100 transition-all   w-[75%] h-[18%]"></div>
        </div>
      </div>
    </div>

    <div className="flex bg-[#F0F0F6] shadow-md mt-5 h-[0.1rem] w-[120%]"></div>

    <p className="text-[1.125] w-[120%] mt-2 font-[500]">Extra Skills</p>
    <div className="flex flex-col gap-1 w-[120%] mt-1">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center font-[400] text-[#767676]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
            <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
          </svg>
          <p>Bootstrap, Materialize</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 items-center font-[400] text-[#767676]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
            <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
          </svg>
          <p>Stylus, Sass, Less</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 items-center font-[400] text-[#767676]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
            <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
          </svg>
          <p>Gulp, Webpack, Grunt</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 items-center font-[400] text-[#767676]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
            <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
          </svg>
          <p>GIT Knowledge</p>
        </div>
      </div>
    </div>

    <div className="flex bg-[#F0F0F6] shadow-md mt-5 h-[0.1rem] w-[120%]"></div>

    <button className="bg-[#FFB400] p-2 mt-2 w-[120%]">
      <a className='w-[100%] h-[100%]' href="/public/Joe Prathap P J-Resume.pdf">
      <div className="flex text-[0.875rem] font-[600] justify-evenly items-center">
        <p>DOWNLOAD CV</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
        >
          <g clipPath="url(#clip0_2_6732)">
            <path
              d="M2.33317 12.9523H11.6665V8.28564H12.8332V13.619C12.8332 13.7958 12.7717 13.9654 12.6623 14.0904C12.5529 14.2154 12.4045 14.2856 12.2498 14.2856H1.74984C1.59513 14.2856 1.44675 14.2154 1.33736 14.0904C1.22796 13.9654 1.1665 13.7958 1.1665 13.619V8.28564H2.33317V12.9523ZM8.1665 6.28564H11.0832L6.99984 10.9523L2.9165 6.28564H5.83317V2.28564H8.1665V6.28564Z"
              fill="#2B2B2B"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_6732">
              <rect
                width="14"
                height="16"
                fill="white"
                transform="translate(0 0.285645)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      </a>
    </button>
  </div>
  
  )
}
