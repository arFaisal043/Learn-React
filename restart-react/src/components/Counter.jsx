import { useState } from "react";

const Counter = () => {
    const [val, setVal] = useState(0);

    function incrementValue() {
        setVal((val) => val + 1)
    }

    function decrementValue() {
        setVal((val) => val - 1);
    }


    return (
      <div>
        <h1>Count Value {val}</h1>
        <div className="flex  gap-5">
          <button onClick={incrementValue} className="bg-blue-400 px-4 py-1 rounded">
            count
          </button>
          <button onClick={decrementValue} className="bg-green-600 px-4 py-1 rounded">
            count
          </button>
        </div>
      </div>
    );
};

export default Counter;