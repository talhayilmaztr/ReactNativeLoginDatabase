import { StyleSheet, 
  Text, 
  View,
  TextInput,
  Image
 } from 'react-native';

 import React, {useState} from 'react';
 import {Loading, Buttton} from '../components';


  const LoginPage = ({navigation}) =>{

  const [Personeid , setPersoneid] = useState("") 
  const [Password, setPassword] = useState("")
  const [Result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  
  return (
    <View style={styles.container}>
      <Text style = {styles.welcome}>{Result}</Text>
    <View style={styles.immg}>
<Image source={require('../../assets/im/react3.png')} style={styles.image}  />
    </View>
      <View style={styles.imputContainer}>
        <Text style={styles.textBox}>Personal ID</Text>
        <TextInput
          placeholder='Enter Your ID'
          style={styles.textInputStyle}
          //onChangeText={(value)=> setName()}
          onChangeText={setPersoneid}
          value={Personeid}
        />
      </View>
      <View style={styles.imputContainer}>
      <Text style={styles.textBox}>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder='Enter Your Password'
        style={styles.textInputStyle}
        keyboardType='numeric'
        onChangeText={setPassword}
        value={Password}
      />
      </View>
     
      <Buttton 
      title='Login'
      setWidth = '80%'
      customColor='green'
      pressedColor='red'
      style={{ marginTop: 20 }}
      handleOnPress={()=> setIsLoading(true)} 

      />
      <Buttton 
      title='SignUp'
      customColor='purple'
      pressedColor='orange'
      setWidth = '30%'
      style={{ marginTop: 20 }}
      handleOnPress={()=> navigation.navigate('SignUp')}
      />
   
      <View style={styles.img1}>
      <Image source={require('../../assets/im/g.png')} style={styles.images} />

      <Image source={require('../../assets/im/github.png')} style={styles.images} />

      <Image source={require('../../assets/im/in.png')} style={styles.images} />
      </View>
      {isLoading
       ? <Loading 
       name="Page Is "
       changeIsLoading={()=> setIsLoading(false)}/> : null}   
    </View>
  );
}
export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    flexDirection:'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:100,
    
    

  },
  textInputStyle: {
    borderBottomWidth:0.5,
    fontWeight:'bold',
    width: '75%',
    height: '6%',
    borderRadius:10,
    justifyContent:'center',
    marginBottom:35,
    textAlign:'center',
    marginHorizontal:'50%',
    textAlignVertical:20

  },

  image:{
  width: 200,
  height: 200,
  marginTop:50,
  padding:'25%',
  
  },
  images:{
    width:50,
    height:50,
    justifyContent:'center',
    marginTop:5,
    marginHorizontal:20,
  
  },
  welcome:{
    fontSize:20,
    color:'green',
    
  },
  button1:{
    fontSize:30,
    borderWidth:1,
    width: '75%',
    height: '6%',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:'90%',
    
  },
  textBox:{
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'flex-start',
    marginHorizontal:55,
    margin:10,
  },
  imputContainer:{
    width:'100%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:0
   
  },
  img1:{
    flexDirection: 'row', 
    marginBottom: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  immg:{
    marginTop:150
  },
  
});

