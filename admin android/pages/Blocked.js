import * as React from 'react';
import {
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Text,
  Image
} from 'react-native';



const Blocked = ({ navigation }) => {


  return (
    <View style={{
      backgroundColor:"#FFF",
      flex:1
  }}>
   
     <View style={{
         
         height:"20%",
        
     }}>
        
         <Image
               source={require('../Images/backred.jpg')}
              style={{
                height:"100%",
                borderBottomLeftRadius:40,
                borderBottomRightRadius:40,
                paddingHorizontal:20,
                width:"100%"
              }}
         />
         <View style={{
             flexDirection:"row",
             alignItems:"center",
             
             width:"100%"
         }}>
         
             {/* <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Image
                      source={require('../images/g.png')}
                      style={{height:60,width:60}}
                  />
             </View> */}
         </View>
     </View>
     
         <View style={{
             backgroundColor:"#FFF",
             paddingVertical:8,
             paddingHorizontal:20,
             marginHorizontal:20,
             borderRadius:15,
             marginTop:25,
             flexDirection:"row",
             alignItems:"center"
         }}>
            
         </View>
      
          <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{height:400}}
          >
            
              <TouchableOpacity 
                 onPress={() => navigation.navigate('BlockedEmpList')}
                  style={{
                      height:220,
                      elevation:2,
                      backgroundColor:"#b30000",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160,
                  }}
              >
                   <Image
                          source={require('../Images/blockedemp.jpg')}
                          style={{
                            height:160,
                            width:160,
                            
                        }}
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Employees</Text>
                    
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                 onPress={() => navigation.navigate('BlockedClientList')}
                  style={{
                      height:220,
                      elevation:2,
                      backgroundColor:"#b30000",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                   <Image
                      source={require('../Images/blockedcurrentclientsnew.jpg')}
                      style={{
                        height:160,
                        width:160,
                        
                    }}
            
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Clients</Text>
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
             </TouchableOpacity>

          </ScrollView>            

          <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{height:400}}
              marginBottom="20%"
          >
            
              <TouchableOpacity 
                  onPress={() => navigation.navigate('BlockedVendorList')}
                  style={{
                      height:220,
                      elevation:2,
                      backgroundColor:"#b30000",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                   <Image
                          source={require('../Images/blockedven.jpg')}
                          style={{
                            height:100,
                            width:160,
                            marginTop:50,
                            
                        }}
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Vendors</Text>
                    
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                  onPress={() => navigation.navigate('BlockedServicesList')}
                  style={{
                      height:220,
                      elevation:2,
                      backgroundColor:"#b30000",
                      marginLeft:20,
                      marginTop:25,
                      borderRadius:15,
                      marginBottom:10,
                      width:160,
                  }}
              >
                  <Image
                      source={require('../Images/blockedservicetools.png')}
                      style={{
                        height:150,
                        width:160,
                        
                       
                        
                    }}
                  />
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Services</Text>
                     
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
                  </TouchableOpacity>

                 
          </ScrollView>     
  </View>
)
}

export default Blocked;
