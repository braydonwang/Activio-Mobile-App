// Expo Components
import { LinearGradient } from "expo-linear-gradient";

export default function DefaultScreen(props) {
  return (
    <LinearGradient
      colors={["#091524", "#320548", "#091524"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      {props.children}
    </LinearGradient>
  );
}
