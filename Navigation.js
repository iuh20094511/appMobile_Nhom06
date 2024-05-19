import { StackActions, DrawerActions, CommonActions } from '@react-navigation/native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import MessageList from './AppChat/screens/Tabs/MessageList';
import FollowScreen from './AppChat/screens/Tabs/FollowScreen';
import ProfileScreen from './AppChat/screens/Tabs/ProfileScreen';

const Tab = createBottomTabNavigator();

// let _navigator

function setTopLevelNavigator(r) {
    _navigator = r
}

function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params
        })
    )
}

function replace(routeName, params) {
    _navigator.dispatch(
        StackActions.replace({
            name: routeName,
            params: params
        })
    )
}

function openDrawer() {
    _navigator.dispatch(DrawerActions.openDrawer())
}

function closeDrawer() {
    _navigator.dispatch(DrawerActions.closeDrawer())
}

function back() {
    _navigator.dispatch(CommonActions.goBack())
}


function Navigation() {
    return (
        // <NavigationContainer>
        <
        Tab.Navigator screenOptions = {
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Message') {
                        iconName = focused ?
                            'message' :
                            'message';
                    } else if (route.name === 'Follow') {
                        iconName = focused ?
                            'supervised-user-circle' :
                            'supervised-user-circle';
                    } else if (route.name === 'Profile') {
                        iconName = focused ?
                            'perm-identity' :
                            'perm-identity';
                    }

                    return <Icon name = { iconName }
                    size = { size }
                    color = { 'green' }
                    />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveBackgroundColor: '#F3F3F3',
            })
        } >
        <
        Tab.Screen name = "Message"
        component = { MessageList }
        /> <
        Tab.Screen name = "Follow"
        component = { FollowScreen }
        /> <
        Tab.Screen name = "Profile"
        component = { ProfileScreen }
        /> < /
        Tab.Navigator >
        // </NavigationContainer>
    );
}


export default {
    navigate,
    setTopLevelNavigator,
    openDrawer,
    closeDrawer,
    back,
    replace
}