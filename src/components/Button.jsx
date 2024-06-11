import React, { forwardRef } from "react";
import { Pressable, Text } from "react-native";
import { formButtonStyle } from "./index";

const LoginButton = forwardRef(({ text, onPress }, ref) => (
  <Pressable
    ref={ref}
    style={formButtonStyle.darkPurpleButton}
    onPress={onPress}
  >
    <Text style={formButtonStyle.darkPurpleButtonText}>{text}</Text>
  </Pressable>
));

const SignupButton = forwardRef(({ text, onPress }, ref) => (
  <Pressable
    ref={ref}
    style={formButtonStyle.fadedPurpleButton}
    onPress={onPress}
  >
    <Text style={formButtonStyle.fadedPurpleButtonText}>{text}</Text>
  </Pressable>
));

// Adjusted styles to avoid the "FormButtonStyle" reference error and also fixed the capitalization.
const NavbarButton = forwardRef(({ children }, ref) => (
  <Pressable ref={ref} style={formButtonStyle.darkPurpleButton}>
    {children}
  </Pressable>
));

const TableButton = forwardRef(({ children }, ref) => (
  <Pressable ref={ref} style={formButtonStyle.fadedPurpleButton}>
    {children}
  </Pressable>
));

module.exports = {
  LoginButton,
  SignupButton,
  NavbarButton,
  TableButton,
};

// import { Pressable, Text } from 'react-native';
// import { formButtonStyle } from './index'

// function LoginButton({text, onpress}){
//     return (
//         <Pressable style={formButtonStyle.darkPurpleButton}>
//             <Text style={formButtonStyle.darkPurpleButtonText}>{text}</Text>
//         </Pressable>
//     )
// }

// function SignupButton({text, onpress}){
//     return (
//         <Pressable style={formButtonStyle.fadedPurpleButton}>
//             <Text style={formButtonStyle.fadedPurpleButtonText}>{text}</Text>
//         </Pressable>
//     )
// }

// function NavbarButton({}){
//     return (
//         <Pressable style={FormButtonStyle}>
//             {Children}
//         </Pressable>
//     )
// }

// function TableButton({}){
//     return (
//         <Pressable style={FormButtonStyle}>
//             {Children}
//         </Pressable>
//     )
// }

// module.exports = {
//     LoginButton,
//     SignupButton,
// }
