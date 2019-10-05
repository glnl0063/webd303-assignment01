// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Text, View} from "react-native";

// import create app container from react navigation library 
import {createAppContainer} from "react-navigation";

// import create bottom tab navigator from react navigation for tabs library 
import {createBottomTabNavigator} from "react-navigation-tabs";

// import icons from font awesome
import {FontAwesome} from "@expo/vector-icons";

// import screens from screen folder
import HomeScreen from "./screens/HomeScreen"; 
import RestaurantScreen from "./screens/RestaurantScreen"; 
import ProfileScreen from './screens/ProfileScreen';

// create a bottom tav navigator and assign it to constant
const TabNavigator = createBottomTabNavigator ({

  // [name of tab] : [location of screen files]
  Home: HomeScreen,
  Restaurant: RestaurantScreen,
  Profile: ProfileScreen,

}, 

{
  // options for navigation
  defaultNavigationOptions: ({navigation}) => ({

    // for the tab bar icons, do the following...
    tabBarIcon: ({tintColor}) => {

      // declared variable and assign the navigation state
      const {routeName} = navigation.state; 

      // declared variable for icon component and set it to font awesome
      let IconComponent = FontAwesome; 

      // declared variable
      let iconName; 

      // if the Home tab is active
      if (routeName === "Home") {

        // set the icon's name to home 
        iconName = "home"; 

      // else if the Restaurant tab is active
      } else if (routeName === "Restaurant") {

        // set the icon's name to user
        iconName = "search"; 

      // else if the Profile tab is active
      } else if (routeName === "Profile") {

        // set the icon's name to user
        iconName = "user"; 

      }

      // return icon component with attributes
      return <IconComponent name={iconName} size={25} color={tintColor}/>
    }

  }),

  // option for tab bar 
  tabBarOptions: {
    activeTintColor: "#131515", 
    labelStyle: {
      fontSize: 12, 
      fontWeight: "bold"
    },
    inactiveTintColor: "#FFFAFB",
    showIcon: true, 
    style: {
      backgroundColor: "#339989"
    }
  }

}

);

// export the app container and pass in the tab navigator
export default createAppContainer(TabNavigator);