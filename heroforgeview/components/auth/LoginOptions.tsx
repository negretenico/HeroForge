import AntDesign from "@expo/vector-icons/AntDesign";
import { Row } from "../containers/Row";
import LoginOption from "./LoginOption";
import { useAuth } from "@/context/AuthContext";
import { Text } from "react-native";
export default function LoginOptions({
  email,
  password,
}: Readonly<{
  email: string;
  password: string;
}>) {
  const { login, onFacebookLogin, onGoogleLogin } = useAuth();
  return (
    <Row>
      <LoginOption onPress={onGoogleLogin}>
        <AntDesign name="google" size={24} color="white" />
      </LoginOption>
      <LoginOption onPress={onFacebookLogin}>
        <AntDesign name="facebook-square" size={24} color="white" />
      </LoginOption>
      <LoginOption onPress={() => login(email, password)}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </LoginOption>
    </Row>
  );
}
