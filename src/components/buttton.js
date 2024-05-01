import { StyleSheet, Text, Pressable } from 'react-native';


const Buttton = ({title,setWidth,handleOnPress, customColor, pressedColor})=> {

    return(
   
        <Pressable 
      onPress={()=> handleOnPress()} 
      
      style = {({pressed})=>  [{
        width: setWidth,
       backgroundColor:pressed ? customColor : pressedColor
      },styles.button]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
     
    )
}

export default Buttton

const styles = StyleSheet.create({
button:{ 
    fontSize:30,
    borderWidth:1,
    width: '75%',
    height: '6%',
    borderRadius:10,
    alignItems:'center',
    padding:10,
    justifyContent:'center',
    margin:15,
    marginHorizontal:'90%',
}, 
buttonText:{
    fontWeight:'bold',
    fontSize:20,
    justifyContent:'center',
    
  },
 
})


