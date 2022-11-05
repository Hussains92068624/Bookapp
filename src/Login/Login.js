//! --> import packages here
import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const Login= ({ navigation }) => {
  return (
    //! view is similar to dic in react JS
    <View style={styles.container}>
      <View style={styles.carContainer}>
       
        <View style={styles.titles}>
          {/* text component */}
          <Text style={styles.title}> Welcome </Text>
          
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Enter Your Username"/>
          <TextInput style={styles.input} placeholder="Enter Your Password"/>
        </View>
        <View style={styles.btn}>
          {/* button component - to trigger an event like: navigating to another screen !!! */}
          <Button  title="Login" onPress={() => navigation.navigate("Home")} />
          
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      title:{
        fontSize: 40,
        fontWeight: "600",
        margin:20
      },
      input:{
        padding:10,
        borderWidth:1,
        margin:10
        
      },
      btn:{
        margin:15,
      }
})
export default Login;