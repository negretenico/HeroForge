import { PropsWithChildren } from "react";
import Pill from "../Pill";
import { TouchableOpacity } from "react-native";

export default function LoginOption({
  children,
  onPress,
}: PropsWithChildren & { onPress: any }) {
  return (
    <Pill>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </Pill>
  );
}
