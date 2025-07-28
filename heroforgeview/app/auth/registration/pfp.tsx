import FormPage from "@/components/containers/FormPage";
import { FormField } from "@/components/FormField";
import * as Yup from "yup";
const pfpSchema = Yup.object().shape({
  link: Yup.string().optional(),
});
export default function ProfilePicScreen() {
  const onSubmit = () => {};
  return (
    <FormPage
      onSubmit={onSubmit}
      validationSchema={pfpSchema}
      initialValues={{ link: "" }}
    >
      <FormField field={{ name: "link", type: "file" }} />
    </FormPage>
  );
}
