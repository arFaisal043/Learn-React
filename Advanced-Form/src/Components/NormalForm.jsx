import { useState } from "react";

const NormalForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(age);
    console.log(password);
  };

  /*
  __________ Drawback of this type of form _________________________

  1. it's perform 're-render' for each click or anything
  -> console.log("Render");

  2. Have to create so many useState hook

  */

  return (
    <div>
      <form onSubmit={formHandler} className="m-10">
        <div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-2 py-1 border w-full"
            placeholder="Enter your first name"
            type="text"
          />
        </div>
        <div>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="px-2 py-1 border w-full"
            placeholder="Enter your last name"
            type="text"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 border w-full"
            placeholder="Enter your email"
            type="text"
          />
        </div>
        <div>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="px-2 py-1 border w-full"
            placeholder="Enter your age"
            type="text"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 border w-full"
            placeholder="Enter your password"
            type="text"
          />
        </div>
        <button className="m-auto w-full bg-blue-600 text-white py-1">
          submit
        </button>
      </form>
    </div>
  );
};

export default NormalForm;