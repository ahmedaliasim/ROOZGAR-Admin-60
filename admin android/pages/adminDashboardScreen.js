import React from 'react';
import Colors from '../constants/color';
// import Dashboard from './Dashboard';
// import Services from './Services/MyServices';
import AdminDashboard from './AdminDashboard';
import Blocked from './Blocked';
import UnVerifiedVendors from './UnVerifiedVendors';
import { DrawerContent } from '../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const adminDashboardScreen = (props) => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
   
      <Drawer.Screen name="Dashboard" component={AdminDashboard} 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
           },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
 },
          headerLeft: null,
         
        }}
      />
       <Drawer.Screen name="Blocked" component={Blocked} 
         options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#b30000",
           },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
 },
          headerLeft: null,
         
        }}
      />
    
<Drawer.Screen name="UnVerifiedVendors" component={UnVerifiedVendors} 
         options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#ff6500",
           },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
 },
          headerLeft: null,
          
        }}
      />


    </Drawer.Navigator>
  )
}

export default adminDashboardScreen;