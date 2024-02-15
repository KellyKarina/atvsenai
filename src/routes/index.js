import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Cursos from '../pages/Cursos';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'white'
                }
            }}>



            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='home' color='red' size={size}></FontAwesome>
                        )
                    }

                }}
            />

            <Tab.Screen
                name='Cursos'
                component={Cursos}
                options={{
                    title: 'Cursos',
                    headerTintColor: 'black',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='book' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />
            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    title: 'Contato',
                    headerTintColor: 'black',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='envelope' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />

        </Tab.Navigator>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




