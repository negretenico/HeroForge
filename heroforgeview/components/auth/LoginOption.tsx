import { PropsWithChildren } from "react";
import Pill from "../Pill";
import { TouchableOpacity } from "react-native";

export default function LoginOption({
  children,
  onPress,
}: PropsWithChildren & { onPress: any }) {
  return (
    <Pill backgroundColor="#323232">
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </Pill>
  );
}
