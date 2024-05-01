import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Pressable } from 'react-native';

const Loading = (props) => {
  return (
    <View style = {styles.container}>
        
        <ActivityIndicator size={'large'} color={'green'}/>
      <Text style = {styles.loginText}>{props.name} Loading..</Text>
      <Pressable
        onPress={()=> props.changeIsLoading()}
        style = {[{}, styles.closeButtonContainer]}>
             <Text style ={ styles.close}>Close</Text>
        </Pressable>
    </View>
  );
};

export default Loading;   
const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'#f0f8ff',
        width:'150%',
        height:'150%',
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    
    
    loginText:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:100,
        color:'green'
    },
    closeButtonContainer:{
      backgroundColor:'black',
      width:130,
      height:50,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      marginTop:50


    },

    close:{
        color:'orange',
        fontWeight:'bold',
        fontSize:'16'

    }
})
