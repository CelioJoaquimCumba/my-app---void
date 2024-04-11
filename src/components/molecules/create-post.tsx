import { Image, View, Text } from "react-native"
import { Input } from "../atoms/input"
import { Button } from "../atoms/button"
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { ChangeEvent, useEffect, useState } from "react";
import React from "react";
import { makePost } from "../../api/postApi";
import { useAuth } from "../../providers/UserProvider";
import { storePosts } from "../../utils/posts";
import NetInfo from '@react-native-community/netinfo';

export const CreatePost = () => {
    const [hide, setHide] = useState(true)
    const [message, setMessage] = useState('')
    const { user } = useAuth()
    
    const handleHide = (state: boolean) => {
        setHide(state)
    }
    
    const submitPost = async () => {
        const {isConnected} = await NetInfo.fetch()
        try {
            if(!isConnected) {
                await storePosts({message, timestamp: new Date().toISOString(), images: ["https://freestyle-images.s3.us-east-2.amazonaws.com/IMG_20230223_093405.jpg"]})
            } else if( user ) {
                await makePost(user?.id, message, ["https://freestyle-images.s3.us-east-2.amazonaws.com/IMG_20230223_093405.jpg"])
            } else {
                throw new Error("User not found")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleMessage = (text: string) => {
        console.log(text)
        setMessage(text);
    }
    useEffect(() => {
        if(message === "") {
            handleHide(true)
        } else {
            handleHide(false)
        }
        console.log(message)
    }, [message])
    return (
        <View className="flex flex-col self-stretch p-4 space-y-2">
            <View className="flex flex-row items-start space-x-2">
                <Image src={'https://picsum.photos/200'} alt="avatar" className="w-8 aspect-square rounded-full"/>
                <Input placeholder="Begin a post" value={message} onChangeText={handleMessage}/>
                <Button className="flex rounded-full bg-teal-100 p-2 items-center justify-center">
                    <AntDesign name="picture" color="black" size={16}/>
                </Button>
            </View>
            <View className={`${hide  ? "hidden" : "flex"} flex-row justify-between`}>
                <Button onPress={submitPost} className="w-full">
                    <Text className="text-white">Post</Text>
                    <FontAwesome name="send" color="white" size={16}/>
                </Button>
            </View>
        </View>
    )
}