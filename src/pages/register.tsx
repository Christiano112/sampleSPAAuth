import { Link, useNavigate } from "react-router-dom";
import useSubmit from "../utils/submit";
import { RegisterSchema } from "../utils/schema";
// Input & Button component from styleguide
import { AppInput, AppButton } from "@octosoft/styleguide";

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
    navigate("/");
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
              <AppInput type="text" name="name" id="name" {...field} />
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
              <AppInput type="text" name="username" id="username" {...field} />
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
              <AppInput
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                {...field}
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
              <AppInput type="tel" name="phone" id="phone" {...field} />
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
              <AppInput
                type="password"
                name="password"
                id="new-password"
                placeholder="********"
                {...field}
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
              <AppInput
                type="password"
                name="confirmPassword"
                id="current-password"
                placeholder="********"
                {...field}
              />
            )}
          />
          {errors?.confirmPassword && (
            <p className="text-[#FF0000] text-xs">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>

        <AppButton type="submit">Register</AppButton>
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
