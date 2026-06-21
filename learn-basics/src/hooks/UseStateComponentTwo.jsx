import { useState } from "react";

const UseStateComponentTwo = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col justify-center space-y-2" action="">
        <input
          placeholder="First Name"
          className="border"
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <input
          placeholder="Last Name"
          className="border"
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />

        <h2>Fist Name: {name.firstName}</h2>
        <h2>Last Name: {name.lastName}</h2>
      </form>
    </div>
  );
};

export default UseStateComponentTwo;
