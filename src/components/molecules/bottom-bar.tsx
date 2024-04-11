import React from "react"
import { View, Text } from "react-native"
import { Feather } from '@expo/vector-icons';
import { Button } from "../atoms/button";
export const BottomBar = () => {

    return (
        <View className="flex flex-row space-x-4 px-4 border border-gray-200 rounded-full justify-between absolute bottom-4 bg-white">
            <BottomItems label="Home" active>
                <Feather name="home" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Search">
                <Feather name="search" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Add">
                <Feather name="plus-square" size={24} color="black" />
            </BottomItems>
            <BottomItems label="Profile">
                <Feather name="user" size={24} color="black" />
            </BottomItems> 
        </View>
    )
}

export interface BottomItemProps {
    children: React.ReactNode
    label?: string,
    active?: boolean
    onPress?: () => void
}
const BottomItems = ({children, label, active=false}:BottomItemProps) => {
    return (
        <Button className={`flex h-full flex-col items-center justify-center rounded-none py-3 ${active && " border-b-2 border-black"}`} variant={"ghost"}>
            {children}
            <Text className="text-sm text-gray-500">{label}</Text>
        </Button>
    )
}