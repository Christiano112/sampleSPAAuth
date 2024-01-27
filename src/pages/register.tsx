import { Link, useNavigate } from "react-router-dom";
import useSubmit from "../utils/submit";
import { RegisterSchema } from "../utils/schema";

type RegisterDataType = {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (data: RegisterDataType) => {
    navigate("/dashboard");
    // console.log(data);
  };

  const { handleSubmit, errors, control, Controller } =
    useSubmit(RegisterSchema);

  return (
    <main className="layout">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-medium text-primary">Register</h1>
        <p>Create An Account to Join OCTOSPA!</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:grid md:grid-cols-2 items-center gap-2 mt-4 w-full"
      >
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="fullName" className="text-secondary">
            Full Name
          </label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="input"
                autoComplete="name"
                name="name"
                id="name"
              />
            )}
          />
          {errors?.fullName && (
            <p className="text-[#FF0000] text-xs">
              {errors?.fullName?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="username" className="text-secondary">
            Username
          </label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="input"
                autoComplete="username"
                name="username"
                id="username"
              />
            )}
          />
          {errors?.username && (
            <p className="text-[#FF0000] text-xs">
              {errors?.username?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-1">
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
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="phone" className="text-secondary">
            Phone
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                type="tel"
                {...field}
                className="input"
                autoComplete="tel"
                name="phone"
                id="phone"
              />
            )}
          />
          {errors?.phone && (
            <p className="text-[#FF0000] text-xs">{errors?.phone?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="new-password" className="text-secondary">
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
                autoComplete="new-password"
                name="password"
                id="new-password"
              />
            )}
          />
          {errors?.password && (
            <p className="text-[#FF0000] text-xs">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="current-password" className="text-secondary">
            Confirm Password
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <input
                type="password"
                {...field}
                className="input"
                autoComplete="new-password"
                name="confirmPassword"
                id="current-password"
              />
            )}
          />
          {errors?.confirmPassword && (
            <p className="text-[#FF0000] text-xs">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>

        <button type="submit" className="btn col-span-2 max-w-fit mx-auto mt-6">
          Register
        </button>
      </form>

      <p className="text-primary-dark text-center">
        Already have an account?{" "}
        <Link to="/auth/login" className="hover:underline underline-offset-2">
          Login
        </Link>
      </p>
    </main>
  );
};

export default Register;
