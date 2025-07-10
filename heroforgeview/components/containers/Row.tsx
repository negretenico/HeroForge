// Row.tsx
import { PropsWithChildren } from "react";
import { ThemedView } from "../ThemedView";
import { View, StyleSheet } from "react-native";

export function Row({ children }: Readonly<PropsWithChildren>) {
  return (
    <ThemedView style={styles.outer}>
      <View style={styles.inner}>{children}</View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: "100%", // matches parent (Container)
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12, // or use margin between children
  },
});
