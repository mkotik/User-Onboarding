import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().trim().required("You must include your name"),
  email: yup.string().trim().email().required("You must include your e-mail"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .required(),
  agree: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms and Conditions"),
});

export default formSchema;
