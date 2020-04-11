import React from 'react';
import { Text, View, StyleSheet, Image,TextInput, ActivityIndicator } from 'react-native';
export default CustomModal = () => {
    return (
      <View style={styles.modalContainer}>
      <Image source={require('../assets/images/check.png')} style={styles.image} />  
      <Text style={styles.title}>Super, Vous êtes maintenant connecté.</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        alignSelf:'center',
        width: "90%",
        borderRadius: 20,
        padding: 20,
        justifyContent: "center",
      },
      title : {
        textAlign:'center',
        marginTop: 20,
        fontSize:17,
        color:'black',
        fontFamily:'muli'
    },
    image:{
        alignSelf:'center'
    }
  })