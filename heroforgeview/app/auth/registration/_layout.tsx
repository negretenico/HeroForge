// RegistrationNavigator.tsx
import { Stack } from "expo-router";

export default function RegistrationLayout() {
  console.log("Registration layout loaded");
  return (
    <Stack initialRouteName="bio" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="bio" options={{ headerBackVisible: false }} />
      <Stack.Screen name="pfp" />
      <Stack.Screen name="email" />
    </Stack>
  );
}
