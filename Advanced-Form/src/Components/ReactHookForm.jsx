import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // fetch data from the form
  const submitForm = (data) => {
    console.log(data);
  };

  //console.log("Render") //-> Not re-render again and again now

  return (
    <div>
      {/* "handleSubmit" will validate out inputs before invoking submitForm() */}
      <form onSubmit={handleSubmit(submitForm)} className="m-10">
        <div className="px-3 py-1 border">
          <label htmlFor="name">Enter name:</label>
          <input id="name" {...register("name")} type="text"/>
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="email">Enter email:</label>
          <input id="email" {...register("email", { required: true })} type="email"/>
          {errors.email && <span>Email is required</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="age">Enter age:</label>
          <input
            id="age"
            {...register("age", {
              min: {
                value: 18,
                message: "Minimum age can be 18",
              },
              max: {
                value: 25,
                message: "Maximum age can be 25",
              },
            })}
            type="number"
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="password">Enter password:</label>
          <input
            id="password"
            {...register("password", {
              minLength: {
                value: 5,
                message: "Minimum password length is 5",
              },
            })}
            type="password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button className="bg-blue-600 text-white w-full py-1">SUBMIT</button>
      </form>
    </div>
  );
};

export default ReactHookForm;