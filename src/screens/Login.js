import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Input, Stack, FormControl, CheckIcon, Button } from "native-base";
import { IconButton } from "react-native-paper";

export default function Login() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../assets/login.jpg")}
        style={{
          height: Dimensions.get("window").height / 2.2,
        }}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.brandView}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 100, height: 100, opacity: 1 }}
          />
          <Text style={styles.brandViewText}>Activio</Text>
        </View>
      </ImageBackground>
      <View style={styles.overlay} />
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: "#4632A1", fontSize: 34, fontWeight: "600" }}>
            Welcome
          </Text>
          <Text
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Don't have an account?
            <TouchableOpacity onPress={() => console.log("hi")}>
              <Text
                style={{
                  color: "red",
                  fontStyle: "italic",
                }}
              >
                {" "}
                Register Now
              </Text>
            </TouchableOpacity>
          </Text>
          <FormControl style={{ marginTop: 30 }}>
            <Stack style={{ borderColor: "#4632A1" }}>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Enter your username"
                keyboardType="email-address"
                InputRightElement={
                  <CheckIcon style={{ color: "#4632A1", marginRight: 7 }} />
                }
              />
            </Stack>
            <Stack style={{ borderColor: "#4632A1", marginTop: 20 }}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                variant="underlined"
                placeholder="********"
                keyboardType="email-address"
                InputRightElement={
                  <IconButton
                    icon="eye"
                    size={15}
                    iconColor="#4632A1"
                    style={{ margin: 0 }}
                  />
                }
              />
            </Stack>
          </FormControl>
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button rounded="full" style={[styles.loginBtn, styles.shadowBtn]}>
              <Text style={{ color: "white" }}>Login</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 30,
    backgroundColor: "rgba(46,7,76,1)",
    zIndex: -1,
  },
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 10,
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 30,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginBtn: {
    alignSelf: "center",
    backgroundColor: "#4632A1",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
  },
  shadowBtn: {
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
    shadowColor: "#00ACEE",
  },
});
