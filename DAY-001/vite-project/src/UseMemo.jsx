import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UseMemo() {
  const [square, setSquare] = useState("");
  const [input, setInput] = useState("");
  const [url,setUrl] = useState("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXR3YnYybXE2bG9lOTdtdGsyenNrczZzOXV1N2poZm5nbDFwcWZ3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VDYPFVyLNfteiCkqgw/giphy.gif")
  const muthu = new Audio(
    "https://us-tuna-sounds-files.voicemod.net/2a3cf9a4-f789-42dc-a644-8d88c0a45d78-1660032742044.mp3",
    { volume: "1.0" }
  );
  const squareNum = useMemo(() => async (num) => {
    muthu.play();
    setUrl("https://media.tenor.com/bIrHe_MGkQAAAAAM/gpmuthu-sethapayale.gif")
    setSquare(num * num);
    setTimeout(()=>{setUrl("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXR3YnYybXE2bG9lOTdtdGsyenNrczZzOXV1N2poZm5nbDFwcWZ3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VDYPFVyLNfteiCkqgw/giphy.gif")},3000)
  },[square]);

  let squareText;
  if (square == "") {
    squareText = "Enter Value to Square";
  } else if (parseFloat(square)) {
    squareText = square;
  } else {
    squareText = "Invalid Value";
  }

  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center flex-grow gap-2 bg-cover"
      style={{
        backgroundImage:
          `URL(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-[12rem] w-max flex-col items-center backdrop-blur-sm  justify-center gap-4 p-4 bg-blue-400/[20%]">
        <h1 className="font-semibold text-[2rem]">{squareText}</h1>
        <input
          className="p-2 outline"
          type="text"
          value={input}
          onChange={(e) => {
            squareNum(e.target.value);
            setInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
