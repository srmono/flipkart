import { Tabs } from "expo-router";
import {MaterialCommunityIcons, FontAwesome, AntDesign} from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{
                    headerShown: false,
                    tablBarLabelStyle: {color: "#7cB9e8"},
                    tabBarLabel: "Home",
                    tabBarIcon: ({focused}) => focused ? (
                        <FontAwesome name="tasks" size={24}  color="7cB9e8" />
                    ) : (
                        <FontAwesome name="tasks" size={24}  color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="calendar" 
                options={{
                    headerShown: false,
                    tablBarLabelStyle: {color: "#7cB9e8"},
                    tabBarLabel: "calendar",
                    tabBarIcon: ({focused}) => focused ? (
                        <AntDesign name="calendar" size={24}  color="7cB9e8" />
                    ) : (
                        <AntDesign name="calendar" size={24}  color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    headerShown: false,
                    tablBarLabelStyle: {color: "#7cB9e8"},
                    tabBarLabel: "profile",
                    tabBarIcon: ({focused}) => focused ? (
                        <MaterialCommunityIcons name="account-details" size={24}  color="7cB9e8" />
                    ) : (
                        <MaterialCommunityIcons name="account-details" size={24}  color="black" />
                    )
                }}
            />
        </Tabs>
    );
}