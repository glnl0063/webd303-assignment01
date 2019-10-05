// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {SafeAreaView, StyleSheet, ScrollView, Text, View, Button} from "react-native";

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";  

// import custom components
import Profile from "../components/Profile";
import SettingList from "../components/SettingList";
import VerticalCard from "../components/VerticalRestaurantCard"; 

// import data from JSON
import favouritePlaces from "../assets/favouriteRestaurants.json";



export default class ProfileScreen extends Component {

  // set the initial state of favourite restaurants to an empty array 
  state = { favPlaces: [] } 

  // when the components are rendered
  componentDidMount() {
    
    // set the state of restaurants to data from JSON
    this.setState( {favPlaces: favouritePlaces} )

  }

  render() {

    // return the following
    return (

      <SafeAreaView style={style.container}>
        <ScrollView>

          <Profile/>      

          <View>
            <Text style={style.sectionTitle}>Favourite Restaurants</Text>
            <ScrollView horizontal={true}> 
              <VerticalCard restaurants={this.state.favPlaces}></VerticalCard>
            </ScrollView>   
            <View style={style.sectionButton}>
              <Button color="#2d8678" title="See More"/>     
            </View>
          </View>

          <SettingList/>       

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

  // fav restaurant title 
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 10
  }, 

  // container for button
  sectionButton: {
    margin: 10
  }

});
