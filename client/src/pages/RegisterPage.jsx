import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const { isAuthenticated, signup, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center">Create account</h1>
      <form
        onSubmit={onSubmit}
        className="w-5/12 py-5 mx-auto mt-5 bg-gray-200 border rounded shadow shadow-gray-400"
        noValidate
      >
        {RegisterErrors.map((error, i) => (
          <div
            className="w-1/2 p-2 mx-auto mb-3 text-center text-white bg-red-600 rounded"
            key={i}
          >
            {error}
          </div>
        ))}
        <div className="w-1/2 mx-auto mb-3">
          <label>Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full px-4 py-2 rounded"
            placeholder="Username"
          />
          {errors.username && (
            <p className="p-2 mt-1 text-red-600 rounded">
              Username is required
            </p>
          )}
        </div>
        <div className="w-1/2 mx-auto mb-3">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 rounded"
            placeholder="Email"
          />
          {errors.email && (
            <p className="p-2 mt-1 text-red-600 rounded">Email is required</p>
          )}
        </div>
        <div className="w-1/2 mx-auto mb-3">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 rounded"
            placeholder="Password"
          />
          {errors.password && (
            <p className="p-2 mt-1 text-red-600 rounded">
              Password is required
            </p>
          )}
        </div>
        <div className="w-1/2 mx-auto">
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded shadow shadow-blue-900"
          >
            Register
          </button>
        </div>
        <p className="flex justify-between w-1/2 mx-auto mt-3">
          Already have an account?
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
