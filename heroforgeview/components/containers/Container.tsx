import { PropsWithChildren } from "react";
import { ThemedView } from "../ThemedView";
import { StyleSheet, View } from "react-native";

export default function Container({ children }: Readonly<PropsWithChildren>) {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.sideSpacer} />
      <View style={styles.mainContent}>{children}</View>
      <View style={styles.sideSpacer} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  sideSpacer: {
    flex: 2,
  },
  mainContent: {
    flex: 6,
    padding: 20,
  },
});
