import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Abdur Rahman");
  const [val, setValue] = useState(0);

  function changeName() {
    setName("Faisal");
  }

  function incrementValue() {
    setValue( (val) => val + 1)
  }

  return (
    <div>
      <h1 className="text-2xl">I am `{name}`</h1>
      <button
        onClick={changeName}
        className="border rounded-2xl px-4 bg-amber-300"
      >
        Change Name
      </button>

      <h1>Value is [ {val} ]</h1>
      <button
        onClick={incrementValue}
        className="border rounded-2xl px-4 bg-amber-300"
      >
        Increment
      </button>
    </div>
  );
};

export default App;