import { Link, useNavigate } from "react-router-dom";
import useSubmit from "../utils/submit";
import { LoginSchema } from "../utils/schema";

type LoginDataType = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (data: LoginDataType) => {
    navigate("/dashboard");
    // console.log(data);
  };

  const { handleSubmit, errors, control, Controller } = useSubmit(LoginSchema);

  return (
    <main className="layout">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-medium -mb-2 text-primary">Login</h1>
        <p>Welcome Back!</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 mt-4 w-full"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-secondary">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                {...field}
                className="input"
                autoComplete="email"
                name="email"
                id="email"
              />
            )}
          />
          {errors?.email && (
            <p className="text-[#FF0000] text-xs">{errors?.email?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="current-password" className="text-secondary">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                type="password"
                {...field}
                className="input"
                autoComplete="current-password"
                name="password"
                id="current-password"
              />
            )}
          />
          {errors?.password && (
            <p className="text-[#FF0000] text-xs">
              {errors?.password?.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 my-2 text-sm">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button type="submit" className="btn">
          Login
        </button>
      </form>

      <p className="text-primary-dark text-center">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="hover:underline underline-offset-2"
        >
          Register
        </Link>
      </p>
    </main>
  );
};

export default Login;
