import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the form schema
const formSchema = z
  .object({
    name: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    email: z.string().email("Please enter a valid email address"),
    age: z.coerce
      .number()
      .min(18, "Age must be greater than 18")
      .max(25, "Age must be less than 25"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z.string(),
    gender: z.string().min(1, "Gender is required"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

const AdvancedFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

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
          <input id="name" {...register("name")} type="text" />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="email">Enter email:</label>
          <input id="email" {...register("email")} type="email" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="age">Enter age:</label>
          <input id="age" {...register("age")} type="number" />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")}>
            <option value="">-- Select gender --</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="password">Enter password:</label>
          <input id="password" {...register("password")} type="password" />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="px-3 py-1 border">
          <label htmlFor="confirm">Confirm password:</label>
          <input id="confirm" {...register("confirm")} type="password" />
          {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>
        <button className="bg-blue-600 text-white w-full py-1">SUBMIT</button>
      </form>
    </div>
  );
};

export default AdvancedFormWithZod;