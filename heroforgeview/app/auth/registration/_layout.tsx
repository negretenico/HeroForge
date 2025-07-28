// RegistrationNavigator.tsx
import { Stack } from "expo-router";

export default function RegistrationLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="bio"
        options={{ headerTitle: "Hello", headerBackVisible: false }}
      />
      <Stack.Screen name="pfp" />
      <Stack.Screen name="email" />
    </Stack>
  );
}
