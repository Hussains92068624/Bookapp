//! --> import packages here
import *as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//! --> import screens here
import Home from "./src/Home/Home";
import Login from "./src/Login/Login";
import sign from "./src/Signup/sign";
import osman from "./src/osman/osman";
import flynn from "./src/flynn/flynn"
import stephen from "./src/stephen/stephen"
import Goodhouse from "./src/Goodhouse/Goodhouse"
import SearchBooks from "./src/search/search"

//! --> create instance of instance of StackNavigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    //! create NavigationContainer component from react-navigation package (must have yo implement navigation)
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="sign">
        {/* each screen resides like  stack*/}
        <Drawer.Screen name="Register / Login" component={sign}/>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name ="osman" component={osman} options={{drawerItemStyle:{display:"none"},}}/>
        <Drawer.Screen name ="flynn" component={flynn} options={{drawerItemStyle:{display:"none"},}}/>
        <Drawer.Screen name = "stephen" component={stephen}  options={{drawerItemStyle:{display:"none"},}} />
        <Drawer.Screen name="Goodhouse" component={ Goodhouse } options={{drawerItemStyle:{display:"none"},}}/>
        <Drawer.Screen name="SearchBooks" component={ SearchBooks  } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}