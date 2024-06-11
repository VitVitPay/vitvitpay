import { Pressable, Text } from "react-native";
import { formButtonStyle } from "./index";

function LoginButton({ text, onpress }) {
  return (
    <Pressable style={formButtonStyle.darkPurpleButton}>
      <Text style={formButtonStyle.darkPurpleButtonText}>{text}</Text>
    </Pressable>
  );
}

function SignupButton({ text, onpress }) {
  return (
    <Pressable style={formButtonStyle.fadedPurpleButton}>
      <Text style={formButtonStyle.fadedPurpleButtonText}>{text}</Text>
    </Pressable>
  );
}

function NavbarButton({}) {
  return <Pressable style={FormButtonStyle}>{Children}</Pressable>;
}

function TableButton({}) {
  return <Pressable style={FormButtonStyle}>{Children}</Pressable>;
}

module.exports = {
  LoginButton,
  SignupButton,
};
