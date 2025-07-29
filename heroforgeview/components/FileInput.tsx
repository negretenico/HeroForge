// components/FileInput.tsx
import { GLOGABL_STYLES } from "@/constants/Styles";
import * as DocumentPicker from "expo-document-picker";
import { Text, TouchableOpacity, View } from "react-native";

export default function FileInput({
  value,
  onChangeText,
  onBlur,
}: {
  value: any;
  onChangeText: (val: any) => void;
  onBlur?: () => void;
}) {
  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    });

    if (result.type === "success") {
      onChangeText(result); // Send the file object to Formik
    }
  };

  return (
    <TouchableOpacity onPress={pickFile} onBlur={onBlur}>
      <View style={GLOGABL_STYLES.input}>
        <Text>{value?.name || "Choose a file..."}</Text>
      </View>
    </TouchableOpacity>
  );
}
