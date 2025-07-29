import NativePage from "@/components/containers/NativePage";
import { Text } from "@react-navigation/elements";

// app/auth/(registration)/index.tsx
import { useLayoutEffect } from "react";
import { router } from "expo-router";
import Loading from "@/components/Loading";

export default function RegistrationIndex() {
  console.log("Registration index");
  useLayoutEffect(() => {
    router.replace("/auth/registration/bio"); // redirect to the first step
  }, []);

  return <Loading />;
}
