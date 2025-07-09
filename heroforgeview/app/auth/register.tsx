import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  //   const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ThemedView>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Create Account"
          onPress={() => register(email, password)}
        />

        <TouchableOpacity onPress={() => console.log("/auth/login")}>
          <Text style={styles.link}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure SafeAreaView takes full height
    backgroundColor: "white", // Or your desired background color
  },
  container: {
    flex: 1, // ThemedView takes remaining height
    justifyContent: "center", // Center content vertically
    paddingHorizontal: 20, // Add some horizontal padding
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
  or: {
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
  },
  link: {
    color: "blue", // Or your desired link color
    textAlign: "center",
    marginTop: 20,
  },
});
