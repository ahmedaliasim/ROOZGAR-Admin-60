import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert,TouchableOpacity,TextInput} from 'react-native';
 import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 

//import { Card, CardTitle,CardImage } from 'react-native-material-cards'


const BlockedClientList = ({navigation,route})=>{


    const [isDisabled,setIsDisabled] = useState(false)
    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    const dispatch  = useDispatch()
    const {data,loading} =  useSelector((state)=>{
        return state
    })

    console.log(data,loading)
   
     const fetchData = ()=>{
        fetch(`${baseURL }/getblockedclient`)
        .then(res=>res.json())
        .then(results=>{
    
            // setData(results)
            // setLoading(false)
          dispatch({type:"ADD_DATA",payload:results})
          dispatch({type:"SET_LOADING",payload:false})

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }

     const deleteEmploye = (_id)=>{
        fetch(`${baseURL }/unblockclient`,{
            method:"post",
            headers:{
             'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id:_id
            })
        })
        .then(res=>res.json())
        .then(deletedEmp=>{
         Alert.alert(`${deletedEmp.userName} client Unblocked`)
            navigation.navigate("Dashboard")
        })
        .catch(err=>{
         Alert.alert("someting went wrong")
        })
    }
    
     useEffect(()=>{
          fetchData() 
     },[])

 
     const renderList = ((item)=>{
        return(
          <Card style={styles.mycard}
          
          onPress={()=>navigation.navigate("Profile", {item})}
         //onPress = {() => console.log("item data", item)}
          >
          <View style={styles.cardView}>
               <Image
              style={{width:100,height:100,borderRadius:50}}
              source={{uri:item.image}}
              
              />
              <View style={{marginLeft:10}}>
                  <Text style={styles.text}>{item.userName}</Text>   
                  <Text style={styles.text}>{item.email}</Text> 
                
              </View>
              {/* <View style= {styles.fab1}>
          <TouchableOpacity  onPress={()=>navigation.navigate("BlockedEmp", {item})}>
              <Image source={require('../Images/Block-512.png')} style= {styles.fab} />
              </TouchableOpacity>
              </View> 
               <View style= {styles.fab1}>
          <TouchableOpacity onPress = {alertunBlock}>
              <Image source={require('../Images/Block-512off.png')} style= {styles.fab} />
              </TouchableOpacity>
              </View>  */}
             

 <FAB  onPress={()=>deleteEmploye(item._id)}
                    style={styles.fab}
                    small={false}
                    icon= "delete"
                    theme={{colors:{accent:"#b30000"}}}
        
                /> 
              




          </View>
          
         </Card>
        )
  })
  
  
 return(
     <View style={{flex:1}}>
         
  <TextInput
                  placeholder="Search"
                  placeholderTextColor="black"
                  style={{
                      fontWeight:"bold",
                      fontSize:18,
                      width:350,
                      paddingBottom:30,
                      paddingTop:10,
                      borderColor:'#b30000',
                      borderWidth:3,
                      borderEndWidth:8,
                      borderBottomRightRadius:200 / 2,
                      borderBottomLeftRadius:200/2,
                      borderTopLeftRadius:200/2,
                      borderTopRightRadius:200/2,
                      marginLeft:40,
                      paddingLeft:50,
                      marginTop:20,
                      marginBottom:10,
                  }}
             />
      <FlatList
            data={data}
            renderItem={({item})=>{
              return renderList(item)
            }}
            keyExtractor={item=>item._id}
            onRefresh={()=>fetchData()}
            refreshing={loading}
            />
      
      
       </View>
     
   ) 
}


const styles = StyleSheet.create({
    mycard:{
        margin:2,
        borderRadius: 55, 
       
    },
    cardView:{
        flexDirection:"row",
        padding:1,
        backgroundColor:"#cd0000",
        borderRadius: 55,
        
    },
    menuIcon3: {
       
        width: 470,
        height: 600,
        alignSelf: 'center',
        backgroundColor:"#FAF9F6",
        borderBottomEndRadius:270 / 2,
        borderBottomLeftRadius:270/2,
        overflow: "hidden",
    
        
      },
      menuIcon5: {
        
         width: 470,
         height: 810,
         alignSelf: 'center',
         backgroundColor:"#FAF9F6",
         borderBottomEndRadius:270 / 2,
         borderBottomLeftRadius:270/2,
         overflow: "hidden",
     
         
       },
       menuIcon6: {
        
         width: 470,
         height: 700,
         alignSelf: 'center',
         backgroundColor:"#FAF9F6",
         borderBottomEndRadius:270 / 2,
         borderBottomLeftRadius:270/2,
         overflow: "hidden",
     
         
       },
    text:{
        fontSize:18,
        fontWeight:"bold",
        paddingTop:10,
        alignSelf:"center"
    },
    text1:{
        fontSize:20,
        alignSelf:"center"
    },
    fab: {
     
        marginTop:20,
        marginBottom: 10,
        width: 50,
        height: 50,
        
        marginLeft: 30
        
      },
      fab1: {
     
        justifyContent: "center",
        alignSelf: 'center',
        
        
      },
})

export default BlockedClientList;