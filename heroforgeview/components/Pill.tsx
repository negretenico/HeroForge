import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { ThemedView } from "./ThemedView";

export default function Pill({
  children,
  backgroundColor,
}: Readonly<PropsWithChildren & { backgroundColor: string }>) {
  return (
    <ThemedView
      style={{
        ...styles.pill,
        backgroundColor,
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
