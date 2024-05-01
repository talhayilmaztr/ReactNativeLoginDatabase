
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomePage,ProfilePage} from "../Screens";

const Stack = createNativeStackNavigator();

const  userStack =() => {
    return(
       <Stack.Navigator 
       initalRouteName ="Home"
       screenOptions ={{headerShown:false}}>
        
        
            <Stack.Screen name= "Home" component={HomePage}/>
            <Stack.Screen name="Profile" component={ProfilePage}/>
       </Stack.Navigator>
    )
}
export default userStack

