import { useRouter } from "expo-router";
import { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function InternalLink({
  route,
  children,
}: PropsWithChildren & {
  route: Parameters<ReturnType<typeof useRouter>["push"]>[0];
}) {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(route)}>
      {children}
    </TouchableOpacity>
  );
}
