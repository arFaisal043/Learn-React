import { useState } from "react";

function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 max-w-64 p-3 shadow-2xl rounded-md">
        <input
          placeholder="First Name"
          className="border px-2 rounded-md"
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          placeholder="Last Name"
          className="border px-2 rounded-md"
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-2 hover:bg-blue-500"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
