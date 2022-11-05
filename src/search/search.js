import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,    
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";


export default class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: "GILLIAN FLYNN GONE GIRL",
        author: "GILLIAN FLYNN",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg",
        description:
          "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears from their rented McMansion on the Mississippi River. Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy’s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter—but is he really a killer?",
          press:()=>this.props.navigation.navigate("flynn"),
      },
      {
        name: "Richard OSMAN THE Thursday Murder Club",
        author: "Richard OSMAN",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582287822i/46000520.jpg",
        description:
          "In a peaceful retirement village, four unlikely friends meet up once a week to investigate unsolved murders.",
          press:()=>this.props.navigation.navigate("osman"),
      },
      {
        name: "STEPHEN KING",
        author: "STEPHEN",
        img: "https://images-na.ssl-images-amazon.com/images/I/410lHsidiVL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        description:
          "It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real. They were seven teenagers when they first stumbled upon the horror",
          press:()=>this.props.navigation.navigate("stephen"),
      },
      {
        name: "THE GOOD HOUSE",
        author: "Tananarive Due",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388594362i/41539.jpg",
        description:
          "Working to rebuild her law practice after her son commits suicide, Angela Toussaint journeys to the family home where the suicide took  place, hoping for answers, and discovers an invisible, ",
          press:()=>this.props.navigation.navigate("Goodhouse"),
      },
    
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == "") {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: "100%", backgroundColor: "#121212" }} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        
        <View style = {styles.design}>
     <FontAwesome style={styles.icon} name="search" size={24} color="white" />
      <TextInput style = {styles.searchBar} placeholder="Search here"
            
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            
          />
        </View>

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.press}>
                <View style={styles.bookContainer}>
                  <Image style={styles.image} source={{ uri: item.img }} />
                  <View style={styles.dataContainer}>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.name}
                    </Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text numberOfLines={4} style={styles.description}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  design:{
    flexDirection: 'row',
    height: 35,
    width:"90%",
    margin: 10,
    borderWidth: 1,
    paddingRight:5,
    paddingLeft:5,
    backgroundColor:"#f4f4f4",
    borderRadius:8,
    borderColor:"#fadadd"
     
  },
  icon:{
    marginRight:10,
    marginTop:5,
    color:'#c4c3d0'
    
  },
  bookContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#d1d8e0",
  },
  image: {
    height: 150,
    width: 100,
    marginLeft: 5,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
  },
  author: {
    fontSize: 16,
  },
 
});