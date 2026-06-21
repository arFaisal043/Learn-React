import { useState } from "react";

const UseStateComponent = () => {
    const [count, setCount] = useState(0); // it means count = 0, setCount is a function

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }

    return (
      <div className="flex flex-col space-y-2 justify-center items-center h-screen">
        <p>
          <b>Count:</b> {count}
        </p>
        <button
          onClick={handleIncrement}
          className="bg-blue-300 py-1 px-2 hover:bg-blue-500 cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-blue-300 py-1 px-2 hover:bg-blue-500 cursor-pointer"
        >
          Decrement
        </button>
      </div>
    );
};

export default UseStateComponent;