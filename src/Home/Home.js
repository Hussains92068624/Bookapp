//! --> import packages here
import React from "react";
import { StyleSheet, Button, Text, View,Image,TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';


const image1 ={uri:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582287822i/46000520.jpg"}
const image2 ={uri:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg"};
const image3 ={uri:"https://images-na.ssl-images-amazon.com/images/I/410lHsidiVL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"}
const image4 ={uri:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388594362i/41539.jpg"}

const Home = ({ navigation }) => {
  return (
  
  
    <View style={styles.container}>
  
     
      
 
      <View style={styles.ctgr1}>
        
      
    <View style={styles.both}> 
    <View >
      <Text style={styles.text1 }>Mystery Books</Text>
      </View>
       <View style = {styles.design}>
      <Button  title="search" onPress={()=>{navigation.navigate("SearchBooks")  }}/>
      </View>
    </View>



      <View style={styles.mys}>
      
        <View style={styles.b1}>
        <TouchableOpacity onPress={()=> navigation.navigate("osman")}>
        <Image source={image1} style={{ width:195,height:270, }}/>
        </TouchableOpacity>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9734;</Text>
        <Text  style={styles.t1} >Richard OSMAN</Text>
        
        </View>
        <View style={styles.b1}>
        <TouchableOpacity onPress={()=> navigation.navigate("flynn")}>
        <Image source={image2} style={{ width:195,height:270 }}/>
        </TouchableOpacity>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9733;</Text>
        <Text  style={styles.t1}>GILLIAN FLYNN </Text>
        </View>
      </View>
       </View>
      

      <View style={styles.ctgr2}>
      <Text style={styles.text2}>Horror Books</Text>
      <View style={styles.horror}>
        <View style={styles.i1}>
        <TouchableOpacity onPress={()=> navigation.navigate("stephen")}>
        <Image source={image3} style={{ width:195,height:270 }}/>
        </TouchableOpacity>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9734;</Text>
        <Text style={styles.t1}>STEPHEN KING</Text>
        </View>
        <View style={styles.i1}>
        <TouchableOpacity onPress={()=> navigation.navigate("Goodhouse")}>
          
        <Image source={image4} style={{ width:195,height:270 }}/>
        </TouchableOpacity>
        <Text style={styles.rate}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9733;</Text>
        <Text  style={styles.t1}>THE GOOD HOUSE</Text>
        </View>
        
      </View>
      
      </View>
      

      </View>
      
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"black"
  },
  design:{
    
    height: 35,
    width:"50%",
    marginTop: 30,
    borderWidth: 1,
    paddingRight:5,
    paddingLeft:5,
    backgroundColor:"#f4f4f4",
    borderRadius:8,
    borderColor:"#fadadd"
     
  },
  both:{
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  icon:{
    marginRight:10,
    marginTop:5,
    color:'#c4c3d0'
    
  },

  text1:{
    marginTop:20,
    color:"white",
    marginLeft:20,
    marginBottom:10,
    fontWeight:"bold",
    fontSize:20
  },
  text2:{
    color:"white",
    marginLeft:20,
    marginBottom:10,
    fontWeight:"bold",
    fontSize:20
  },
  rate:{
    color:"yellow"
  },

  t1:{
    color:"grey",
    
    
    fontWeight:"bold",
    fontSize:20
  },


  
  mys:{
   flexDirection:'row',
 
  },
  horror:{
    flexDirection:'row',
  }
  


 
  
});

export default Home;