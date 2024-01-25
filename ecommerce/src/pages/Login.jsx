import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DynamicForm from "../components/form/DynamicForm";
import Button from "../components/common/Button.jsx";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import authService from "../Firebase/authService.js";
import { useDispatch } from "react-redux";
import { login } from "../Redux/authSlice.js";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fields = [
    { type: "text", label: "Email address", name: "email" },
    { type: "text", label: "Password", name: "password" },
  ];

  const initialValues = {
    email: "",
    password: "",
  };

  if (location.pathname === "/register") {
    fields.unshift({
      type: "text",
      label: "Full name",
      name: "name",
    });

    initialValues.name = "";
  }

  const validationSchema = Yup.object().shape({
    name:
      location.pathname === "/login"
        ? Yup.string()
        : Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    location.pathname === "/login"
      ? authService.login(values).then((res) => {
          console.log("login", res.user.uid);
          dispatch(login(res.user.uid));
          navigate("/");
        })
      : authService.createAccount(values).then((res) => {
          console.log("register", res.user.uid);
          dispatch(login(res.user.uid));
          navigate("/");
        });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  const googleLogin = async () => {
    try {
      const res = await authService.loginWithGoogle();
      console.log("Google login successful", res.user.uid);
      dispatch(login(res.user.uid));
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error.message);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div className="flex justify-center items-center flex-col">
        <FaShoppingBag className="text-blue-600 size-10" />
        <h2 className="mt-10 text-2xl font-bold leading-9  ">
          {location.pathname === "/register"
            ? "Create new account"
            : "Sign in to your account"}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <DynamicForm
            fields={fields}
            values={formik.values}
            onChange={handleChange}
            errors={formik.errors}
            touched={formik.touched}
          />

          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" name="" id="remember" />
              <label className="ml-2" htmlFor="remember">
                Remember me
              </label>
            </div>
            <span className="text-primary">Forget password?</span>
          </div>
          <div className="pt-5" onClick={formik.handleSubmit}>
            <Button text="Submit" className="border-0 w-full text-center" />
          </div>
          {location.pathname !== "/register" ? (
            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <span
                class="leading-6 text-primary cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register here
              </span>
            </p>
          ) : null}

          <div className="text-center pt-8">
            <hr className=" border-primary-border " />
            <span className="relative bottom-[0.85rem] bg-violate px-4 text-center">
              Or continue with
            </span>
            <div className="" onClick={() => googleLogin()}>
              <Button text="Google" className="border-0 m-auto mt-3" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
