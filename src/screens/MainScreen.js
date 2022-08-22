import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { useTheme } from "react-native-paper";
import DefaultScreen from "./DefaultScreen";

export default function MainScreen(props) {
  const { colors } = useTheme();
  return (
    <DefaultScreen>
      <View style={styles.container}>
        <Text style={{ color: colors.secondary }}>
          My cool React Native App.
        </Text>
        <Button icon="camera" mode="contained" onPress={() => {}}>
          Press me
        </Button>
      </View>
    </DefaultScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
