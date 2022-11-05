
import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const image2 ={uri:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg"};

const flynn = ({navigation}) => {
    return(
        <ScrollView>
          
        <View style={styles.container}>
        <Image source={image2} style={{ width:300,height:370 }}/>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9733;</Text>
            <Text style={styles.h1} >Author: GILLIAN FLYNN {"\n"}Price: Rs.3500</Text>
            <Text style={styles.top}>Marriage can be a real killer.</Text>
<Text style={styles.btm}>
On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. {"\n"}Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears from their rented McMansion on the Mississippi River. {"\n"}Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. {"\n"}Under mounting pressure from the police and the media—as well as Amy’s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter—but is he really a killer?




</Text>
           
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
        padding:20,
    },
    h1:{
        fontSize:25,
        fontWeight:'bold',
        padding:5,
        color:"white"
    },
    top:{
        fontSize:25,
        fontWeight:'450',
        padding:5,
        color:"white"

    },
    btm:{
        fontSize:15,
    padding:10,
    margin:10,
    color:"white"
    }
})
export default flynn;