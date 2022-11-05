
import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const image1 ={uri:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582287822i/46000520.jpg"}

const osman = ({navigation}) => {
    return(
        <ScrollView>
        <View style={styles.container}>
             <Image source={image1} style={{ width:250,height:370, }}/>
             <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9734;</Text>

            <Text style={styles.h1} >Author: Richard OSMAN {"\n"}Price: Rs.1500</Text>
            <Text style={styles.top}>Four unlikely friends{"\n"}
A shocking murder{"\n"}
Welcome to THE THURSDAY MURDER CLUB
</Text>
<Text style={styles.btm}>
In a peaceful retirement village, four unlikely friends meet up once a week to investigate unsolved murders.{"\n"}

But when a brutal killing takes place on their very doorstep, the Thursday Murder Club find themselves in the middle of their first live case.{"\n"}

Elizabeth, Joyce, Ibrahim and Ron might be pushing eighty but they still have a few tricks up their sleeves.{"\n"}

Can our unorthodox but brilliant gang catch the killer before it's too late?
</Text>
            <View>
           
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        margin:5,
        borderWidth:9,
        borderColor:"blue"
    },
     rate:{
        color:"yellow",
        fontSize:20,
         padding:10,
         
         
         
    },
    h1:{
        fontSize:25,
        fontWeight:'bold',
        padding:5 ,color:"white"
    },
    top:{
        fontSize:25,
        fontWeight:'450',
        color:"white"
    },
    btm:{
        fontSize:15,
    padding:10,
    margin:10,
    color:"white"
    }
})
export default osman;