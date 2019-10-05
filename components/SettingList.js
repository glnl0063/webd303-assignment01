// import react and the component components from react
import React, {Component} from "react"; 

// import specific components from react native 
import {FlatList, StyleSheet, Text, Image, View} from "react-native"; 



export default class SettingList extends Component {

    render() {

        return (

            // takes data and renders them into a list
            <View style={style.container}>

                <FlatList 
                    data={[
                        {key: "Preferences"},
                        {key: "Reviews"},
                        {key: "Photos"},
                        {key: "Messages"},
                        {key: "Check-Ins"},
                        {key: "My Activity"},
                        {key: "Reservations"},
                    ]}
                    renderItem={ ({item}) => 
                        <View style={style.listContainer}>
                            <Text style={style.listItem}>{item.key}</Text>
                            <Image style={style.arrow} source={require("../assets/right_arrow.png")}/>
                        </View>    
                    }
                />
                
            </View>

        );

    }

}


const style = StyleSheet.create({

    // flat list 
    container: {
        flex: 1,
        paddingTop: 25
    },

    // list container
    listContainer: {  
        borderBottomColor: "#D3D3D3",         
        borderBottomWidth: 0.5,  
        borderTopColor: "#D3D3D3",                       
        borderTopWidth: 0.5, 
        flex: 1, 
        flexDirection: "row",
        width: "100%"
    },

    // each item 
    listItem: {      
        fontSize: 20, 
        padding: 10
    }, 

    // each right arrow 
    arrow: {
        height: 15, 
        position: "absolute", 
        right: 10, 
        top: 15, 
        width: 15, 
    }

})