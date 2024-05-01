import { StyleSheet, Text, View, TextInput } from 'react-native';


const CustomText = ({title,customPlaceHolder,onChangeText,value,asecureTextEntry})=> {

    return(
   
        <View style={styles.imputContainer}>
      <Text style={styles.textBox}>{title}</Text>
      <TextInput
        placeholder= {customPlaceHolder}
        style={styles.textInputStyle}
        asecureTextEntry={asecureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
      </View>
     
    )
}

export default CustomText

const styles = StyleSheet.create({
    imputContainer:{
        width:'100%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:100
       
      },
    textInputStyle: {
        borderBottomWidth:5.5,
        borderWidth:5,
        borderBottomColor:"red",
        fontWeight:'bold',
        width: '75%',
        height: '6%',
        borderRadius:0,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'50%',
        paddingVertical: 20, 
    
    
      },
      textBox:{
        fontWeight:'bold',
        fontSize:34,
        alignSelf:'flex-start',
        marginHorizontal:55,
      },
      
 
})
