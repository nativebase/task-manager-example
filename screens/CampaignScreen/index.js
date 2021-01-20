import React from 'react';
import { Icon, Box, View } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

import HomeScreen from "./Home";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            flexDirection={'row'}
            backgroundColor="bg.200"
            height={70}
            borderRadius={50}
            justifyContent={"center"}
            alignItems={"center"}
        >
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';

                    } else if (route.name === 'Message') {
                        iconName = 'message';
                    }
                    else if (route.name === 'Settings') {
                        iconName = 'view-comfortable';
                    }
                    else {
                        iconName = 'supervised-user-circle';
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={{ flex: 1, alignItems: "center" }}
                        >
                            <Box h={12} w={12}
                                bg={isFocused ? "bg.400" : ""}
                                borderRadius={8} justifyContent={'center'} alignItems={'center'}>
                                <Icon color={isFocused ? "#6B63FF" : "white"} type={route.type} name={iconName} size={6} />
                            </Box>
                        </TouchableOpacity>
                    );
                })
            }
        </View >
    );
}

export default function Index() {
    return (
        <Tab.Navigator tabBar={props => <Box
            bg={'bg.400'}
            pb={5}><MyTabBar {...props} /></Box>}>
            <Tab.Screen name="Home" type={"Ionicons"} component={HomeScreen} />
            <Tab.Screen name="Message" type={"MaterialIcons"} component={HomeScreen} />
            <Tab.Screen name="Settings" type={"AntDesign"} component={HomeScreen} />
            <Tab.Screen name="Profile" type={"MaterialIcons"} component={HomeScreen} />
        </Tab.Navigator>
    );
}