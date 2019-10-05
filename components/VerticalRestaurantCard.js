// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, View, Image} from "react-native";



export default class RestaurantCard extends Component {

  render() {

    // return the following
    return (

      // map through data passed from HomeScreen.js (parent component) and for each restaurant, do the following...
      this.props.restaurants.map((restaurant, index) => (

        // set a unique key to index for each restaurant and display image, name, image, address & location 
        <View key={index} style={style.container}>
          <View style={style.imageContainer}>
            <View style={style.ratingContainer}>
              <Text name="rating" style={style.ratingText}>{restaurant.rating}</Text>
              <Image source={require("../assets/star.png")} style={style.ratingImage}/>    
            </View>    
            <Image source={{uri: restaurant.image}} style={style.image}/>
          </View>
          <View style={style.detailsContainer}>
            <Text name="name" style={style.name}>{restaurant.name}</Text>
            <Text name="address">{restaurant.address}</Text>
            <View style={style.typeContainer}>
              <Text name="type" style={style.type}>{restaurant.type}</Text>              
            </View>
          </View>
        </View>        

      ))

    );

  }

}



const style = StyleSheet.create({

  // card container
  container: {
    borderRadius: 5,
    elevation: 5,   
    flex: 1, 
    margin: 10, 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 200
  },

  // container for image & rating
  imageContainer: {
    height: 150, 
    position: "relative", 
  },

  // container for rating
  ratingContainer: {
    alignItems: "center",  
    backgroundColor: "#339989",
    color: "#FFFAFB", 
    display: "flex", 
    flexDirection: "row", 
    left: 0, 
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,  
    position: "absolute", 
    top: 20, 
    zIndex: 2
  },

  ratingText: {
    color: "#FFFAFB", 
    fontSize: 20, 
    fontWeight: "bold",        
  },
  
  ratingImage: {
    height: 15, 
    marginLeft: 3,
    marginRight: 5,
    width: 15
  },  

  image: {
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5, 
    height: 145,    
    left: 3,       
    position: "absolute",
    top: 5,
    width: "97%"
  }, 

  // container for name, address, location & type
  detailsContainer: {
    flexShrink: 1,       
    padding: 10,
  },

  name: {
    color: "#339989",
    fontWeight: 'bold',
    fontSize: 18
  },

  // container for type
  typeContainer: {
    display: "flex", 
    flexDirection: "row",
    marginTop: 10,
    width: "100%"
  },

  type: {
    backgroundColor: "#888", 
    borderRadius: 3, 
    color: "#FFFAFB",
    fontWeight: "bold",
    marginRight: 5,
    paddingBottom: 3,
    paddingLeft: 5, 
    paddingRight: 5, 
    paddingTop: 3
  }

});