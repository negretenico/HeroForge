import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { Stack } from "expo-router";

export default function RootLayoutNav() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />; // or a splash screen

  return (
    <Stack>
      {/* Authenticated Screens */}
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      {/* Unauthenticated Screens */}
      <Stack.Protected guard={!user}>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
