import FormPage from "@/components/containers/FormPage";
import { FormField } from "@/components/FormField";
import * as Yup from "yup";
const emailSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});
export default function EmailScreen() {
  const submitFunc = () => {};
  return (
    <FormPage
      validationSchema={emailSchema}
      onSubmit={submitFunc}
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
    >
      <FormField
        field={{
          name: "email",
          type: "email",
        }}
        error={{ name: "email" }}
      />
      <FormField
        field={{ name: "password", type: "password" }}
        error={{ name: "error" }}
      />
      <FormField
        field={{ name: "passwordConfirmation", type: "password" }}
        error={{ name: "passwordConfirmation" }}
      />
    </FormPage>
  );
}
