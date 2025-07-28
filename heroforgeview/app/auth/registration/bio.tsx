import FormPage from "@/components/containers/FormPage";
import * as Yup from "yup";
import { FormField } from "@/components/FormField";
import { TextInput, Text } from "react-native";
import { GLOGABL_STYLES } from "@/constants/Styles";
const bioSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  phrase: Yup.string().optional(),
});
export default function BioScreen() {
  const onSubmitFunc = () => {
    console.log("Hi nico");
  };
  return (
    <FormPage
      initialValues={{
        name: "",
      }}
      validationSchema={bioSchema}
      onSubmit={onSubmitFunc}
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
    </FormPage>
  );
}
