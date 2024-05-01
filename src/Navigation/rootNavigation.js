import { StyleSheet} from "react-native";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from "./authStack";
import UserStack from "./userStack";

const rootNavigation =() => {
    const isAuth = false;
    return(
        <NavigationContainer>
            {
                !isAuth ? <AuthStack/>
                : <UserStack/> 
            }
        </NavigationContainer>
    )
}
export default rootNavigation

const Styles = StyleSheet.create({}) 