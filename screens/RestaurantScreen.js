// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native and gesture handler
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from "react-native";
import {TextInput} from "react-native-gesture-handler";

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";

// import icons from font awesome
import {FontAwesome} from "@expo/vector-icons";

// import custom component to create cards for each restaurant 
import RestaurantCard from "../components/HorizontalRestaurantCard";

// import data from json
import PopularRestaurants from "../assets/popularRestaurants.json";



export default class HomeScreen extends Component {

  // set the initial state of restaurants to an empty array
  state = { restaurants: []}

  // when the components are rendered
  componentDidMount() {
    
    // set the state of restaurants to data frpm JSON
    this.setState( {restaurants: PopularRestaurants} )
  }

  render() {
    
    // return the following 
    return (

      // pass data from parent to child component (RestaurantCard.js)      
      <SafeAreaView style={style.container}>
        <ScrollView>

          <View style={style.inputContainer}>
            <FontAwesome style={style.searchIcon} name="search" size={20}/>
            <TextInput style={style.input} placeholder={"Find restaurants"}/>
          </View>

          <View>
            <Text style={style.sectionTitle}>Popular Restaurants</Text>            
            <RestaurantCard restaurants={this.state.restaurants}/> 
          </View>
     

        </ScrollView>
      </SafeAreaView>


    );

  }

}



const style = StyleSheet.create({

  // container of whole page
  container: {
    flex: 1, 
    marginTop: Constants.statusBarHeight
  }, 

  // container for input
  inputContainer: {
    alignContent: "center",
    backgroundColor: "#2d8678",
    display: "flex", 
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    padding: 5, 
    width: "100%"
  }, 

  searchIcon: {
    color: "#FFFAFB",
    paddingRight: 5,
    paddingTop: 10
  },

  input: {
    backgroundColor: "white", 
    borderRadius: 10, 
    paddingBottom: 5, 
    paddingLeft: 10, 
    paddingRight: 10,
    paddingTop: 5,  
    width: "90%"
  },

  // section titles - popular restaurants
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 10
  }  

});
