import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  return (
    <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>

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

        <Button title="Login" onPress={() => login(email, password)} />

        <Text style={styles.or}>or</Text>

        {/* <Button
          title="Continue with Google"
          onPress={onGoogleLogin}
          color="#DB4437"
        />
        <Button
          title="Continue with Facebook"
          onPress={onFacebookLogin}
          color="#3b5998"
        /> */}

        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.link}>
            Don&apos;t have an account? Register here
          </Text>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  link: {
    color: "#1E90FF",
    marginTop: 16,
    textAlign: "center",
  },
  or: {
    textAlign: "center",
    marginVertical: 12,
    color: "#999",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
