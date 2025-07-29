import { ErrorMessage, Field, useField } from "formik";
import { ThemedView } from "./ThemedView";
import { Text, TextInput, StyleSheet } from "react-native";
import { GLOGABL_STYLES } from "@/constants/Styles";

type FormFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  component?: React.ComponentType<any>;
  layout?: "vertical" | "horizontal";
  showError?: boolean;
  inputProps?: Record<string, any>;
};

export const FormField = ({
  name,
  label,
  placeholder,
  component: InputComponent = TextInput,
  layout = "vertical",
  showError = true,
  type,
  inputProps = {},
}: FormFieldProps) => {
  const [field, meta, helpers] = useField(name);
  return (
    <ThemedView>
      {showError && meta.touched && meta.error && (
        <Text style={GLOGABL_STYLES.error}>{meta.error}</Text>
      )}
      {label && <Text style={styles.label}>{label}</Text>}
      <InputComponent
        value={field.value}
        onChangeText={helpers.setValue}
        onBlur={() => helpers.setTouched(true)}
        placeholder={placeholder}
        {...inputProps}
        style={[GLOGABL_STYLES.input, inputProps?.style]}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "red",
    fontSize: 12,
    marginBottom: 16,
  },
});
