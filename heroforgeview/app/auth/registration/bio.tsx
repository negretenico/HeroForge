import FormPage from "@/components/containers/FormPage";
import * as Yup from "yup";
import { FormField } from "@/components/FormField";
import { TextInput, Text } from "react-native";
import { GLOGABL_STYLES } from "@/constants/Styles";
import { useRouter } from "expo-router";
import NavigationScreen from "@/components/containers/NavigatingScreen";
const bioSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  phrase: Yup.string().optional(),
});
export default function BioScreen() {
  return (
    <NavigationScreen
      initialValues={{
        name: "",
      }}
      validationSchema={bioSchema}
      route={"/auth/registration/pfp"}
    >
      <FormField
        name="name"
        placeholder="Full Name"
        component={TextInput}
        showError
      />
      <FormField
        name="phrase"
        placeholder="I am the night"
        component={TextInput}
      />
    </NavigationScreen>
  );
}
