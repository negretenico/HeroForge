import FormPage from "@/components/containers/FormPage";
import NavigationScreen from "@/components/containers/NavigatingScreen";
import FileInput from "@/components/FileInput";
import { FormField } from "@/components/FormField";
import * as Yup from "yup";
const pfpSchema = Yup.object().shape({
  link: Yup.string().optional(),
});
export default function ProfilePicScreen() {
  return (
    <NavigationScreen
      route={"/auth/registration/email"}
      validationSchema={pfpSchema}
      initialValues={{ link: "" }}
    >
      <FormField
        name="link"
        label="Upload your profile pic"
        component={FileInput}
      />
    </NavigationScreen>
  );
}
