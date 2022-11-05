import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const image4 ={uri:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388594362i/41539.jpg"}


const Goodhouse = ({navigation}) => {
    return(
        <ScrollView>
        <View style={styles.container}>
        <Image source={image4} style={{ width:300,height:470 }}/>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9733;</Text>
            <Text style={styles.h1} >Author: Tananarive Due {"\n"}Price: Rs.2500</Text>
            <Text style={styles.btm}>Working to rebuild her law practice after her son commits suicide, 
                Angela Toussaint journeys to the family home where the suicide took 
                place, hoping for answers, and discovers an invisible, 
                evil force that is driving locals to acts of violence.</Text>
            
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
    
    btm:{
        fontSize:15,
    padding:10,
    margin:10,
    color:"white"
    }
})
export default Goodhouse;