// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, View, ScrollView, Image , SafeAreaView} from "react-native";

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";

// import custom component to create cards for each restaurant 
import VerticalCard from "../components/VerticalRestaurantCard";

// import data from JSON
import NewRestaurants from "../assets/newRestaurants.json";
import LocalRestaurants from "../assets/nearbyRestaurants.json";



export default class HomeScreen extends Component {

  // set the initial state of restaurants to an empty array 
  state = { newRestaurants: [], nearbyRestaurants: []}

  // when the components are rendered
  componentDidMount() {
    
    // set the state of restaurants to data frpm JSON
    this.setState( {newRestaurants: NewRestaurants, nearbyRestaurants: LocalRestaurants} )
  }

  render() {

    // declared variable for hero image
    var heroImage = "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
    
    // return the following 
    return (

      // pass data from parent to child component (RestaurantCard.js)      
      <SafeAreaView style={style.container}>
        <ScrollView>

          <View style={style.heroContainer}>
            <Text style={style.heroTitle}>Explore, dine and enjoy!</Text>            
            <Image source={{uri: heroImage}} style={style.heroImage}/>
          </View>          

          <View>
            <Text style={style.sectionTitle}>New restaurants you'll love</Text>
            <ScrollView horizontal={true}> 
              <VerticalCard restaurants={this.state.newRestaurants}/>
            </ScrollView>        
          </View>

          <View>
            <Text style={style.sectionTitle}>Great restaurants near you</Text>
            <ScrollView horizontal={true}> 
              <VerticalCard restaurants={this.state.nearbyRestaurants}/>
            </ScrollView>        
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

  // container for hero page
  heroContainer: {
    height: 325,  
    position: "relative", 
    width: "100%"
  },

  heroTitle: {
    color: "#9edfd4",
    fontSize: 45, 
    fontWeight: "bold",
    left: 10,
    position: "absolute",  
    top: 10,
    width: "50%",
    zIndex: 2 
  },  

  heroImage: {      
    height: 325,   
    position: "absolute",   
    width: "100%"
  },  

  // section titles - new restaurant, local restaurant
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 10
  }

});
