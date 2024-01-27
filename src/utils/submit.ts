import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";

const useSubmit = (schema: ObjectSchema<Record<string, any>>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return { register, handleSubmit, errors, control, reset, Controller };
};

export default useSubmit;
