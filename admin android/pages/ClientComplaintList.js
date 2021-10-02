import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert,TouchableOpacity} from 'react-native';
import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 


const ClientComplaintList = (props)=>{

    const {_id} = props.route.params
    const [complaintsList, setCompliantsList] = useState([]);

    const [isDisabled,setIsDisabled] = useState(false)
    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    const dispatch  = useDispatch()
    const {data,loading} =  useSelector((state)=>{
        return state
    })

    console.log(data,loading)
   
     

     const fetchData = ()=>{
        fetch(`${baseURL }/complaints/${_id}/`)
        .then(res=>res.json())
        .then(results=>{

            setCompliantsList(results.complaint)
    
          dispatch({type:"ADD_DATA",payload:results})
          dispatch({type:"SET_LOADING",payload:false})

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }

     useEffect(()=>{
          fetchData() 
          console.log(data + "hello")
     },[])

    
    const renderList = ((item)=>{
          return(
            <Card style={styles.mycard}
            
            onPress={()=>props.navigation.navigate("UpdateComplaint", {item})}
            >
            <View style={styles.cardView}>
                 <Image
                style={{width:60,height:60,borderRadius:30}}
                source={{uri:item.image}}
                
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.vendorName}</Text>   
                    <Text style={styles.text}>{item.remarks}</Text> 
                  
                </View>
            </View>
            
           </Card>
          )
    })
    
    
   return(
       <View style={{flex:1}}>
    
        <FlatList
              data={complaintsList}
              renderItem={({item})=>{
                return renderList(item)
              }}
              keyExtractor={item=>item._id}
              onRefresh={()=>fetchData()}
              refreshing={loading}
              style={{width:"100%",height:"100%"}}
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
        padding:3,
        backgroundColor:"#5b9b2d",
        borderRadius: 55,
        
    },
    text:{
        fontSize:18,
    },
    fab: {
     
        marginTop:10,
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

export default ClientComplaintList;