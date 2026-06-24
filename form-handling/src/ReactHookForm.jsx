import { useForm } from "react-hook-form";
 
const ReactHookForm = () => {
    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 max-w-64 p-3 shadow-2xl rounded-md"
      >
        <input {...register("firstName")} placeholder="First Name" className="border px-2 rounded-md" />
        <input {...register("lastName")} placeholder="Last Name" className="border px-2 rounded-md" />
        <button
          type="submit"
          className="bg-blue-600 text-white px-2 hover:bg-blue-500"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
