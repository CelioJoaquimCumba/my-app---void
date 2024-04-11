import React from "react"
import { View, Text } from "react-native"
import { Feather } from '@expo/vector-icons';
export const NavBar = () => {

    return (
        <View className="flex flex-col space-y-4 p-4 border border-gray-200">
            <section className="flex justify-between ">
                <Text className="text-3xl">Home</Text>
                <Feather name="bell" size={24} color="black" />
            </section>
        </View>
    )
}