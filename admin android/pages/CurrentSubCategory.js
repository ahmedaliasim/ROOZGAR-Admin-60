import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert,TouchableOpacity,TextInput,Modal} from 'react-native';
import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
//import { Card, CardTitle,CardImage } from 'react-native-material-cards'

const CurrentSubCategory = ({navigation,route})=>{
    const {category} = route.params;

    const sendCred= async ()=>{
        fetch(`${baseURL}/addsubcategory/${category}/`,{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           title,
           picture,
           price
         })
        })
        .then(res=>res.json())
        .then(async (data)=>{
              console.log(data);
        }).catch(err=>{
          console.log(err)
         Alert.alert("Empty Field")
     })
     }
     

    const getDetails = (type)=>{
        if(route.params){
           switch(type){
               case "title":
                   return route.params.title
               case "picture":
                   return  route.params.picture
                   case "price":
                    return  route.params.price
              
           }
        }
        return ""
     }
  const [picture,setPicture] = useState("https://media.istockphoto.com/vectors/cute-cartoon-little-boy-plant-a-tree-isolated-on-white-background-vector-id1095420038?k=6&m=1095420038&s=612x612&w=0&h=nv0PeXNu58ocYPpxQaLXdCClSYUHXHBEQppF2P9E_4g=")
  const [title,setTitle] = useState(getDetails("title"))
  const [price,setPrice] = useState(getDetails("price"))
    const [modal,setModal] = useState(false)
    const [modal1,setModal1] = useState(false)
    const [isDisabled,setIsDisabled] = useState(false)
    const [subcategoriesList,setSubCategoriesList] = useState([])
      const [enableshift,setenableShift] = useState(false)
    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    const dispatch  = useDispatch()
    const {data,loading} =  useSelector((state)=>{
        return state
    })

    console.log(data,loading)
   
     const fetchData = ()=>{
        fetch(`${baseURL }/getsubcategory/${category}`)
        .then(res=>res.json())
        .then(results=>{

            setSubCategoriesList(results.subCategories)

          dispatch({type:"ADD_DATA",payload:results})
          dispatch({type:"SET_LOADING",payload:false})

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }

     const alertBlock = () => {

        Alert.alert("blocked successfully")

     }

     const alertunBlock = () => {

        Alert.alert("Unblocked successfully")

     }

     
    
     useEffect(()=>{
          fetchData() 
     },[])

     const renderList = ((item)=>{
      return(
        <Card style={styles.mycard}
        
        onPress={()=>navigation.navigate("ClientProfile", {item})}
     
        >
        <View style={styles.cardView}>
             <Image
            style={{width:100,height:100,borderRadius:50}}
            source={{uri:item.picture}}
            
            />
            <View style={{marginLeft:10}}>
                <Text style={styles.text}>{item.title}</Text>   
                <Text style={styles.text}>{item.price} Rs</Text> 
              
            </View>
         
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
                      width:260,
                      paddingBottom:30,
                      paddingTop:10,
                      borderColor:'green',
                      borderWidth:3,
                      borderEndWidth:8,
                      borderBottomRightRadius:200 / 2,
                      borderBottomLeftRadius:200/2,
                      borderTopLeftRadius:200/2,
                      borderTopRightRadius:200/2,
                      marginLeft:70,
                      paddingLeft:50,
                      marginTop:20
                  }}
             />
             { subcategoriesList.length === 0 ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No services found, maybe start creating some?</Text>
      </View>) : (  <FlatList
          data={subcategoriesList}
          style={{width:"100%",height:"100%"}}
          renderItem={({item})=>{
            return renderList(item)
          }}
          keyExtractor={item=>item._id}
          onRefresh={()=>fetchData()}
          refreshing={loading}
       
          />
) }
       
       <Button 
             style={styles.inputStyle}
             icon={picture==""?"upload":"check"}
              mode="contained" 
              theme={theme}
              title = "Add SubCategory"
              onPress={() => {setModal(true)}}>      
             </Button>
            

      
      <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View>
                      
      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      >Add Category</Text>
       <TextInput
                label='Title'
                style={styles.inputStyle}
                value={title}
                onFocus={()=>setenableShift(false)}  
                theme={{colors:{primary:"green"}}}          
                mode="outlined"
                onChangeText={setTitle}
            />

<Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      >Add Price</Text>
             <TextInput
                label='Price'
                style={styles.inputStyle}
                value={price}
                onFocus={()=>setenableShift(false)}  
                theme={{colors:{primary:"green"}}}          
                mode="outlined"
                onChangeText={text => setPrice(text)}
            />
    
     
     
      <Button 
             style={styles.inputStyle}
             icon={picture==""?"upload":"check"}
              mode="contained" 
              theme={theme}
              title = "Upload Picture"
              onPress={() => {setModal1(true); setModal(false) }}>
                    
             </Button>
            
          
          
             
      
                  </View>
                <Button 
                 theme={theme}
                 title="cancel"
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
             </Modal>
             
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal1}
             onRequestClose={()=>{
                 setModal1(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button icon="camera"
                         theme={theme}
                        mode="contained"
                        title="camera"
                         onPress={() => sendCred()}>
                                
                        </Button>
                        {/* <Button 
                        icon="image-area"
                         mode="contained"
                         theme={theme}
                         title="gallery"
                          onPress={() => pickFromGallery()}>
                                
                        </Button> */}
                  </View>
                <Button 
                 theme={theme}
                 title="cancel"
                onPress={() => setModal1(false)}>
                        
                </Button>
              </View>
             </Modal> 
          
       </View>
     
   ) 
}
const theme = {
    colors:{
        primary:"#006aff"
    }
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
        fontSize:20,
        fontWeight:"bold",
        paddingTop:10,
        alignSelf:"center"
    },
    text1:{
        fontSize:20,
        alignSelf:"center"
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
      menuIcon4: {
        marginTop:20,
        marginBottom: 10,
        width: 60,
        height: 60,
       marginRight:50,
       marginLeft: 200
      },
      modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white",
        height:"50%"
  
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:80,
        width:"85%"
    },
})

export default CurrentSubCategory;