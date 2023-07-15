import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser } from "../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface ILoginFormInputs {
  email: string;
  password: string;
}
export default function LoginFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();

  //access user from state
  const { user, isLoading } = useAppSelector((state) => state.user);
  //dispatch
  const dispatch = useAppDispatch();
  //navigate
  const navigate = useNavigate();

  //onsubmit
  const onSubmit = (data: ILoginFormInputs) => {
    console.log("submitted");
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  // when login successfull then redirect to home
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              className="input input-bordered input-accent w-full"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <label className="" htmlFor="password">
              Password
            </label>
            <input
              className="input input-bordered input-accent w-full"
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button className="btn btn-outline btn-success mb-6 mt-2">
            Login
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-center btn btn-outline w-full my-3 btn-success"
      >
        <p>Google</p>
        <FcGoogle />
      </button>
    </div>
  );
}
