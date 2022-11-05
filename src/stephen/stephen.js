import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const image3 ={uri:"https://images-na.ssl-images-amazon.com/images/I/410lHsidiVL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"}

const stephen = ({navigation}) => {
    return(
        <ScrollView>
        <View style={styles.container}>
        <Image source={image3} style={{ width:300,height:470 }}/>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9734;</Text>
            <Text style={styles.h1} >Author: STEPHEN {"\n"}Price: Rs.2500</Text>
            <Text style={styles.btm}>Welcome to Derry, Maine.{"\n"} It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.

They were seven teenagers when they first stumbled upon the horror. {"\n"}Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children.{"\n"} Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.</Text>
          
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
   container:{ flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin:5,
    borderWidth:9,
    borderColor:"blue"
},
h1:{
    fontSize:25,
    fontWeight:'bold',
    padding:5,
    color:"white"
},
 rate:{
    color:"yellow",
    fontSize:20,
    padding:20,
},

btm:{
    fontSize:15,
padding:10,
margin:10,
color:"white"
}

})
export default stephen;