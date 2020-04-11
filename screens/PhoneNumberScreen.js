import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "../Config/Firebase";
function PhoneNumberScreen({ navigation }) {
  const [phone, setPhone] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const recaptchaVerifier = useRef(null);
  sendCode = () => {
    if (phone.length >= 9) {
      setLoading(true);
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phone, recaptchaVerifier.current)
        .then((id) => {
          setLoading(false);
          navigation.navigate("verify", { verificationId: id });
        })
        .catch((e) => console.log(e));
    } else {
      alert("Numéro invalide");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/image.png")} />
      <Text style={styles.title}>
        Connectez vous avec votre numéro de téléphone
      </Text>
      <TextInput
        placeholder="Numéro de tel"
        placeholderTextColor="white"
        style={styles.input}
        onChangeText={setPhone}
        returnKeyType="done"
        keyboardType="phone-pad"
        autoCompleteType="tel"
      />
      <TouchableOpacity onPress={sendCode} style={styles.button}>
        {loading ? (
          <ActivityIndicator color="#87c965" />
        ) : (
          <Text style={styles.textButton}>Envoyer</Text>
        )}
      </TouchableOpacity>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87c965",
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    width: "60%",
    fontSize: 17,
    marginBottom: 20,
    color: "white",
    fontFamily: "muli",
  },
  input: {
    width: "60%",
    color: "white",

    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "white",
    fontFamily: "muli",
    marginBottom: 20,
  },
  button: {
    width: "50%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: "muli",
    color: "#87c965",
  },
});
export default PhoneNumberScreen;
