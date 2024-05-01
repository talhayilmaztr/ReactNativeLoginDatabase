import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { CustomText } from '../components';


const SignupPage = ()=> {

const [isSign, setIsSign] = useState(false)
    return(
        <View style= {styles.container}>
            <Text>SignupPage</Text>
            <CustomText/>

        
      </View>
    )
}
export default SignupPage
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent :'center',
        alignItems:'center',
        textAlignVertical:256
        
    }
})