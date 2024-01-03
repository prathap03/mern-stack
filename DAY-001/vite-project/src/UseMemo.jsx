import { useMemo, useState } from "react"


export default function UseMemo() {
  const [square, setSquare] = useState("")
  const [input, setInput] = useState("")

  const squareNum = useMemo(()=>(num) => {
    setSquare(num*num)
})


    let squareText;
    if (square == '') {
        squareText = 'Enter Value to Square';
    } else if (parseFloat(square)) {
        squareText = square;
    } else {
        squareText = 'Invalid Value';
    }

    return (
        <div className='flex flex-col items-center justify-center flex-grow gap-2'>
            <div className="flex h-[12rem] w-max flex-col items-center backdrop-blur-sm  justify-center gap-4 p-4 bg-blue-400/[20%]">
            <h1 className="font-semibold text-[2rem]">{squareText}</h1>
            <input className="p-2 outline" type="text" value={input} onChange={(e) => { squareNum(e.target.value); setInput(e.target.value) }} />
            </div>
        </div>
    )
}
