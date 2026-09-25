import { useState } from "react";

const FormHandler = () => {
  const [name, setName] = useState({ firstName: "", lastName: "", email: "" });

  function submitHandler(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="m-5 border rounded">
        <input
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
          className="border px-2 py-1 text-black m-3"
          placeholder="First name"
          type="text"
        />
        <input
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
          className="border px-2 py-1 text-black m-3"
          placeholder="Last name"
          type="text"
        />
        <input
          value={name.email}
          onChange={(e) => {
            setName({ ...name, email: e.target.value });
          }}
          className="border px-2 py-1 text-black m-3"
          placeholder="Your Email"
          type="text"
        />
        <button className="bg-blue-500 m-3 px-5 py-1 rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandler;
