import { object, string, ref } from "yup";

export const LoginSchema = object().shape({
  email: string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const RegisterSchema = object().shape({
  fullName: string().trim().required("Name is required"),
  username: string().trim().required("Username is required"),
  phone: string().trim().required("Phone is required"),
  email: string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: string()
    .trim()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm password is required")
    .min(8, "Password must be at least 8 characters"),
});
