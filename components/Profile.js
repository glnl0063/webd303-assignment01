// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, View, Image} from "react-native";


export default class Profile extends Component {
  render() {
    return (
        <View style={style.profileContainer}>
            <View style={style.avatarContainer}>
                <Image style={style.avatar} 
                    source={{uri: "https://images.unsplash.com/photo-1568638480314-fc4a3752e720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}}
                />
            </View>
            <View style={style.detailContainer}>
                <View style={style.nameContainer}>
                    <Text style={style.name}>Amelia River</Text>
                    <Text style={style.location}>Toronto, ON</Text>
                </View>
                <View style={style.statContainer}>
                    <View style={style.followerContainer}>
                        <Text style={style.followTitle}>Followers</Text>
                        <Text style={style.followCounter}>64</Text>
                    </View>
                    <View style={style.followingContainer}>
                        <Text style={style.followTitle}>Followings</Text>
                        <Text style={style.followCounter}>325</Text>
                    </View>                    
                </View>                
            </View>            
        </View>
    );
  }
}

const style = StyleSheet.create({

  // container for profile
  profileContainer: {
    backgroundColor: "#2d8678", 
    flexDirection: "row", 
    height: 175,
    width: "100%"
  },

  // container for avatar
  avatarContainer: {         
    height: 175,
    padding: 10, 
    width: "50%"    
  },  

  // avatar image
  avatar: {
    borderColor: "#46c1ae",
    borderRadius: 150/2,
    borderWidth: 2,    
    height: 150,
    width: 150
  },   

  // container for profile details
  detailContainer: {
    alignItems: "center", 
    height: 175,
    justifyContent: "center",
    padding: 5, 
    width: "50%"   
  }, 

  nameContainer: {
    paddingBottom: 15,
    width: "100%"
  }, 

  name: {
    color: "#FFFAFB",
    fontSize: 25,
    fontWeight: "bold",
  },

  location: {
    color: "#FFFAFB",
    fontSize: 16,      
    fontWeight: "bold",  
  }, 

  statContainer: {
    flexDirection: "row", 
  }, 

  followerContainer: {
    width: "50%"
  }, 

  followingContainer: {
    width: "50%"
  }, 

  followTitle: {
    color: "#FFFAFB", 
  }, 

  followCounter: {
    color: "#FFFAFB",       
    fontSize: 20, 
    fontWeight: "bold"
  }



});
