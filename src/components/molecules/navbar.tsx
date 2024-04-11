import React from "react"
import { View, Text } from "react-native"
import { Feather } from '@expo/vector-icons';
import { Button } from "../atoms/button";
export const NavBar = () => {

    return (
        <View className="flex flex-col space-y-4 px-4 self-stretch">
            <View className="flex flex-row justify-between ">
                <Text className="text-xl">Home</Text>
                <Button variant={"ghost"}>
                    <Feather name="bell" size={24} color="black" />
                </Button>
            </View>
        </View>
    )
}