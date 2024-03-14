import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesheet";
import { useState, useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import { login } from "../backendInteractions/auth";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../helpers/interfaces";

type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProp>();
  const { loginServiceProvider } = useContext(AuthContext);
  const handleLogin = async () => {
    const response = await loginServiceProvider(login, username, password);
    if (response.success) navigation.navigate("Home");
  };
  return (
    <View style={styles.background}>
      <TextInput style={styles.inputField} placeholder="Username"></TextInput>
      <TextInput style={styles.inputField} placeholder="Password"></TextInput>
      <TouchableOpacity onPressIn={handleLogin} style={styles.loginButton}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
