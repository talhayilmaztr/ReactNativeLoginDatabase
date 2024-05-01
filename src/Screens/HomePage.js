import {StyleSheet, Text, View} from "react-native";
import React from "react";

const HomePage =() => {
    return(
        <View style={Styles.container}>
            <Text>"HomePage"</Text>
        </View>
    )
}
export default HomePage

const Styles = StyleSheet.create({
  container:{
    flex :1,
    justifyContent:"center",
    alignItems:"center",
  }
}) 