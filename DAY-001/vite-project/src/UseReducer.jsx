import { useReducer } from "react";

export default function UseReducer() {

  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        if (state.count <= 0) {
          return { count: 0 };
        }
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error();
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
