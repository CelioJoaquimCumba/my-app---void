import React from "react"
import { View, Text, ScrollView, Image } from "react-native"
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

export const Post = ({author, timeStamp, message, images}: {author: string, timeStamp: string, message: string, images: Array<string>}) => {

    return (
        <View className="flex flex-col space-y-4 p-4 border border-gray-200">
            <View className="flex justify-between ">
                <View>
                    <Image src="avatar" alt="avatar" className="w-16 h-16 rounded-full"/>
                    <View>
                        <Text className="text-xl text-black font-semibold">
                            {author}
                        </Text>
                        <Text className="text-gray-500 text-sm font-medium">
                            {timeStamp}
                        </Text>
                    </View>
                    <View className="flex space-x-4">
                        <EvilIcons name="external-link" size={24} color="black" />
                        <SimpleLineIcons name="options-vertical" size={24} color="black" />
                    </View>
                </View>

            </View>
            <View>
                <Text className="text-black text-lg font-base">
                    {message}
                </Text>
            </View>
            <View>
                <ScrollView horizontal>
                    <Image source={{uri: images[0]}} className="w-80 h-80" />
                    {images.filter((image) => image !== images[0]).map((image) => (
                        <Image source={{uri: image}} className="w-32 h-32" />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}