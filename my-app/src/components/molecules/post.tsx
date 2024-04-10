import React from "react"
import { View, Text } from "react-native"
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

export const Post = ({author, timeStamp, message}: {author: string, timeStamp: string, message: string}) => {

    return (
        <View className="flex flex-col space-y-4 p-4 border border-gray-200">
            <section className="flex justify-between ">
                <View>
                    <img src="avatar" alt="avatar" className="w-16 h-16 rounded-full"/>
                    <View>
                        <Text className="text-xl text-black font-semibold">
                            {author}
                        </Text>
                        <Text className="text-gray-500 text-sm font-medium">
                            {timeStamp}
                        </Text>
                    </View>
                    <View classname="flex space-x-4">
                        <EvilIcons name="external-link" size={24} color="black" />
                        <SimpleLineIcons name="options-vertical" size={24} color="black" />
                    </View>
                </View>

            </section>
            <section>
                <Text className="text-black text-lg font-base">
                    {message}
                </Text>
            </section>
        </View>
    )
}