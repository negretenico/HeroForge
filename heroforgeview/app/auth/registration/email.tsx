import FormPage from "@/components/containers/FormPage";
import NavigationScreen from "@/components/containers/NavigatingScreen";
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
  return (
    <NavigationScreen
      validationSchema={emailSchema}
      route={"/(tabs)"}
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
    >
      <FormField
        inputProps={{
          keyboardType: "email-address",
        }}
        name="email"
        placeholder="email@example.com"
        showError
      />
      <FormField
        inputProps={{
          keyboardType: "password",
          secureTextEntry: true,
        }}
        name="password"
        placeholder="Enter your password"
        showError
      />
      <FormField
        name="passwordConfirmation"
        placeholder="Confirm your password"
        inputProps={{
          keyboardType: "password",
          secureTextEntry: true,
        }}
        showError
      />
    </NavigationScreen>
  );
}
