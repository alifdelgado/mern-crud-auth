import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-2xl font-bold">Create account</h1>
      <form
        onSubmit={onSubmit}
        className="bg-gray-200 border rounded w-5/12 mx-auto mt-5 py-5 shadow shadow-gray-400"
      >
        <div className="w-1/2 mx-auto mb-3">
          <label>Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full px-4 py-2 rounded"
            placeholder="Username"
          />
        </div>
        <div className="w-1/2 mx-auto mb-3">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 rounded"
            placeholder="Email"
          />
        </div>
        <div className="w-1/2 mx-auto mb-3">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 rounded"
            placeholder="Password"
          />
        </div>
        <div className="w-1/2 mx-auto">
          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded shadow text-white shadow-blue-900"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
