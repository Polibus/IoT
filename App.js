import  React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";
import devices from "./Screens/Devices"
import Connection from "./Screens/Connection"


const Tab = createBottomTabNavigator();

function App() {

  

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          return (
              <Icon
                  name='person' size={30}
              />
          )
        }
      })}
                     tabBarOptions={styles.tab}
      >
        <Tab.Screen name="Devices" component={devices} options={{ gestureEnabled: false, headerShown: false} } />
        <Tab.Screen name="Connection" component={Connection}  options={{ gestureEnabled: false, headerShown: false} }/>
      </Tab.Navigator>
    </NavigationContainer>
);
};

const styles = StyleSheet.create({
tab: {
    showLabel: true,
    labelStyle: { fontSize: 25 },
}
});



export default App;