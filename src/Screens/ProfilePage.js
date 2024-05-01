import { StyleSheet, Text, View} from "react-native";
import React from "react";

const ProfilePage =() => {
    return(
        <view style={Styles.container}>
            <text>ProfilePage</text>
        </view>
    )
}
export default ProfilePage

const Styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:"center",
        alignItems:"center",
      }
}) 