import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const { isAuthenticated, signin, errors: SigninErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signin(values);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={onSubmit}
        className="w-5/12 py-5 mx-auto mt-5 bg-gray-200 border rounded shadow shadow-gray-400"
        noValidate
      >
        {SigninErrors.map((error, i) => (
          <div
            className="w-1/2 p-2 mx-auto mb-3 text-center text-white bg-red-600 rounded"
            key={i}
          >
            {error}
          </div>
        ))}
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
          Already not a member?
          <Link to="/register" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
