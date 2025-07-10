import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import Container from "@/components/containers/Container";
import LoginOptions from "@/components/auth/LoginOptions";
import InternalLink from "@/components/InternalLink";
import NativePage from "@/components/containers/NativePage";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <NativePage>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          source={require("@/assets/images/adaptive-icon.png")}
          style={styles.reactLogo}
          contentFit="contain"
        />
      </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ textAlign: "center" }}>
          HeroForge
        </ThemedText>
      </ThemedView>
      <ThemedText
        type="subtitle"
        style={{ textAlign: "center", fontSize: 14, marginBottom: 16 }}
      >
        Save the day-one habit at a time.
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <LoginOptions email={email} password={password} />
      <InternalLink route={"/auth/register"}>
        <Text style={styles.link}>
          Don&apos;t have an account? Register here
        </Text>
      </InternalLink>
    </NativePage>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    width: "100%", // takes full available width
    height: undefined, // allows auto-height from aspectRatio
    aspectRatio: 1.6, // or whatever matches your image (e.g. 290 / 178 ≈ 1.63)
    resizeMode: "contain", // scales the image without cropping
    marginBottom: 16,
  },
  titleContainer: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    marginBottom: 32,
  },
  link: {
    color: "#1E90FF",
    marginVertical: 16,
    textAlign: "center",
  },
});
