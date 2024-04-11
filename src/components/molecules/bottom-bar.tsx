import React from "react"
import { View, Text } from "react-native"
import { Feather } from '@expo/vector-icons';
export const BottomBar = () => {

    return (
        <View className="flex flex-grow flex-col z-10 space-y-4 p-4 border border-gray-200 rounded-full bottom-4">
            <BottomItems label="Home">
                <Feather name="home" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Search">
                <Feather name="search" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Add">
                <Feather name="plus-square" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Heart">
                <Feather name="heart" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Profile">
                <Feather name="user" size={24} color="black" />
            </BottomItems> 
        </View>
    )
}

export interface BottomItemProps {
    children: React.ReactNode
    label?: string
    onPress?: () => void
}
const BottomItems = ({children, label}:BottomItemProps) => {
    return (
        <View className="flex flex-col">
            {children}
            <Text className="text-sm text-gray-500">{label}</Text>
        </View>
    )
}