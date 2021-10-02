import React,{useState} from 'react';
import { TextInput} from 'react-native-paper';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 


//const SignUp = (props) => {

  const UpdateComplaint = ({navigation,route})=>{
    const getDetails = (type)=>{
       if(route.params){
          switch(type){
              case "status":
                  return route.params.status
              case "remarks":
                 return route.params.remarks
           
          }
       }
       return ""
    }

  const [status,setStatus] = useState(getDetails("status"))
  const [remarks,setRemarks]=useState(getDetails("remarks"));
  const [enableshift,setenableShift] = useState(false)





    const updateDetails = ()=>{
        fetch(`${baseURL }/updatecomplaints`,{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id:route.params._id,
                status,
                remarks
                
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`updated successfuly`)
            navigation.navigate("AdminDashboard")
        })
        .catch(err=>{
          Alert.alert("someting went wrong")
      })
    }
 
  return (
  
   <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
     <ScrollView>
     <Image
              style={styles.menuIcon1}
              source={require('../Images/rozgaar.png')}
            />
             <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Welcome</Text>

      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      >Update Your Account</Text>
       <TextInput
                label='Status'
                style={styles.inputStyle}
                value={status}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={text => setStatus(text)}
            />
      <TextInput
        label='Remarks'
        mode="outlined"
        value={remarks}
        style={styles.inputStyle}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>setRemarks(text)}
     
      />

<View>
     

      <Button 
             style={styles.inputStyleButton}
             
              mode="contained" 
              title = "Update details"
              onPress={() => updateDetails()}>
                   
             </Button>
             </View>    
     
      </ScrollView>
      </KeyboardAvoidingView>
   
  );
  
};
const theme = {
  colors:{
      primary:"#006aff"
  }
}

const styles=StyleSheet.create({
  root:{
     flex:1,
  },
  inputStyle:{
    marginLeft:18,marginRight:18,marginTop:18
  },
  inputStyleButton:{
   flexDirection:"row",justifyContent:"space-around",padding:5
  },
  modalView:{
      position:"absolute",
      bottom:2,
      width:"100%",
      backgroundColor:"white"

  },
  modalButtonView:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
  },
  menuIcon1: {
      marginTop:10,
      marginBottom: 10,
      width: 200,
      height: 180,
      alignSelf: 'center',
    }
})

export default UpdateComplaint;