import React from "react"
import { View, Text, ScrollView, Image } from "react-native"
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { Button } from "../atoms/button";

interface PostProps {
    author: string
    timeStamp: string
    message: string
    images?: Array<string>
}

export const Post = ({author, timeStamp, message, images}: PostProps) => {

    return (
        <View className="flex flex-col space-y-4 p-4 border border-gray-200">
            <View className="flex justify-between ">
                <View className="flex flex-row justify-between">
                    <View className="flex flex-row space-x-2 items-center">
                    <Image src='https://picsum.photos/200' alt="avatar" className="w-8 aspect-square rounded-full"/>
                    <View>
                        <Text className="text-base text-black font-semibold">
                            {author}
                        </Text>
                        <Text className="text-gray-300 text-sm font-medium">
                            {timeStamp}
                        </Text>
                    </View>

                    </View>
                    <View className="flex flex-row space-x-1">
                        <Button variant={"ghost"}>
                            <Feather name="external-link" size={16} color="black" />
                        </Button>
                        <Button variant={"ghost"}>
                            <SimpleLineIcons name="options-vertical" size={12} color="black" />
                        </Button>
                    </View>
                </View>
            </View>
            <View>
                <Text className="text-black text-lg font-base">
                    {message}
                </Text>
            </View>

            {images && images.length > 0 &&
                <View className="flex space-y-2">
                    <Image source={{uri: images[0]}} className="w-full aspect-square rounded-md" />
                    <ScrollView horizontal className="flex space-x-2">
                        {images.filter((image, index) => index !== 0).map((image, index) => (
                            <Image source={{uri: image}} key={index} className="w-40 aspect-square rounded-md" />
                        ))}
                    </ScrollView>
                </View>
            }
        </View>
    )
}