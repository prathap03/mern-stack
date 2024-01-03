import { useReducer } from "react";

export default function UseReducer() {
  const initialState = {
    count: 0,
    pressed: false,
  };

  const reset = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3",{volume:0.001});
  const add = new Audio("https://audio-previews.elements.envatousercontent.com/files/380699735/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22CA3S2TC-puzzle-add.mp3%22",{volume:0.001});
  const sub = new Audio("https://audio-previews.elements.envatousercontent.com/files/101795909/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22QXTVGUM-life-points-decrease.mp3%22",{volume:0.001});
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        add.play();
        return { count: state.count + 1 };
      case "decrement":
        sub.play();
        if (state.count <= 0) {
           
           return { count: 0 };
        }
        return { count: state.count - 1 };
    case "reset":
        
        reset.play();
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="flex flex-col items-center h-[15rem] gap-2 p-4 bg-cyan-300/[50%] rounded-md shadow-md justify-evenly">
        <h1 className="text-2xl font-semibold">COUNT: {state.count}</h1>
        <div className="flex gap-2 mt-2 w-[40%] justify-center">
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="p-2 text-white active:scale-90 transition-all bg-green-500 font-semibold rounded-full min-w-[6rem] shadow-sm"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="p-2 text-white active:scale-90 transition-all bg-red-500 font-semibold rounded-full min-w-[6rem] shadow-sm"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="p-2 text-red-500 active:scale-90 transition-all rounded-full font-semibold min-w-[6rem] shadow-sm outline outline-2"
          >
            Reset
          </button>
          
        </div>
      </div>
    </div>
  );
}
