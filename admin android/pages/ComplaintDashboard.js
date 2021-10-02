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



const ComplaintDashboard = ({ navigation }) => {


  return (
    <View style={{
      backgroundColor:"#FFF",
      flex:1
  }}>
   
     <View style={{
         
         height:"20%",
        
     }}>
        
         <Image
               source={require('../Images/back2.jpg')}
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
              style={{height:400,marginLeft:80}}
          >
            
              <TouchableOpacity 
                 onPress={() => navigation.navigate('CurrentCompletedComplaints')}
                  style={{
                      height:260,
                      elevation:2,
                      backgroundColor:"#FFF",
                      borderRadius:15,
                      width:260,
                  }}
              >
                   <Image
                          source={require('../Images/emp.png')}
                          style={{
                            height:160,
                            width:260,
                            
                        }}
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Completed Complaints</Text>
                    
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
              style={{height:400,
            marginLeft:80}}
          >
            
              

              <TouchableOpacity 
                 onPress={() => navigation.navigate('CurrentPendingComplaints')}
                  style={{
                    height:260,
                    elevation:2,
                    backgroundColor:"#FFF",
                    marginTop:10,
                    borderRadius:15,
                    width:260,
                  }}
              >
                   <Image
                      source={require('../Images/currentclientsnew.png')}
                      style={{
                        height:160,
                        width:260,
                        
                    }}
            
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Pending Complaints</Text>
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

export default ComplaintDashboard;
