
import React from "react";
import { StyleSheet, Button, Text, View, ImageBackground } from "react-native";
const image = {uri:"https://play-lh.googleusercontent.com/DglqS-eYHQYXnj8M8tmzh3JcKDXcidSo3IzgyCZzci8ZTV9Pmuk8vvIFh9XHOztC3Q"};

const sign= ({ navigation }) => {
    return (
        
      //! view is similar to dic in react JS
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
         
          <View>
            {/* text component */}
            <Text style={styles.title}> Welcome </Text>
            
          </View>
          <View>
            
          </View>
          <View style={styles.btn}>
            {/* button component - to trigger an event like: navigating to another screen !!! */}
            <Button  title="Login" onPress={() => navigation.navigate("Login")} />
            <Button title="Register" onPress={( )=> navigation.navigate("Login")} />
          </View>
     
      </View>
      
    )
}
const styles = StyleSheet.create({
    container:{
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
      fontWeight:'bold',
      fontSize:50,
      padding:20
  },
  btn:{
      
      flexDirection:'row',
      padding:20,
      justifyContent:'space-evenly',
      
  },
  image:{
    width:"100%",
    height:"100%",
  
  position:'absolute'
}
})
export default sign;