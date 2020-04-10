import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image,TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../Config/Firebase';
function VerifyScreen({route , navigation}) {
    const { verificationId } = route.params;
    const [code, setCode] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const verifyCode = () => {
        console.log(verificationId)
        setLoading(true)
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          code
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            // Do something with the results here
            console.log(result);
            setLoading(false)
          });
      }
    
    return (
        <View style={styles.container}>
          <Image source={require('../assets/images/image.png')} />
          <Text style={styles.title}>Entrer le code reçu par sms</Text>
          <TextInput
          placeholder="Code" 
          placeholderTextColor="white"
          style={styles.input}
          onChangeText={setCode}
          returnKeyType="done"
          keyboardType="phone-pad"
          
          />
          <TouchableOpacity onPress={verifyCode} style={styles.button}> 
            {loading ? 
            <ActivityIndicator color="#87c965" /> :  
            <Text style={styles.textButton}>Valider</Text>
            }
          </TouchableOpacity>
       
        </View>
    )
}
   

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#87c965'
    },
    title : {
        textAlign:'center',
        marginTop: 20,
        width:'60%',
        fontSize:17,
        marginBottom: 20,
        color:'white',
        fontFamily:'muli'
    },
    input : {
        width:'60%',
        color:'white',
       
        borderRadius: 10,
        padding:15,
        borderWidth: 1,
        borderColor:'white',
        fontFamily:'muli',
        marginBottom: 20
    },
    button : {
        width:'50%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical: 15,
        borderRadius:10
    },
    textButton: {
        fontFamily:'muli',
        color:'#87c965'
    }
})
export default VerifyScreen;
