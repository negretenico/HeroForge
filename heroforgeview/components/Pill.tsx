import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Pill({
  children,
  backgroundColor,
}: Readonly<PropsWithChildren & { backgroundColor?: string }>) {
  const defaultBackground = useThemeColor({}, "pill");
  const background = backgroundColor ?? defaultBackground;
  return (
    <ThemedView
      style={{
        ...styles.pill,
        backgroundColor: background,
      }}
    >
      {children}
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 9999, // pill shape
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
