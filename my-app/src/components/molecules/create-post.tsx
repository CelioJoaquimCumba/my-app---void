import { Image, View } from "react-native"
import { Input } from "../atoms/input"
import { Button } from "../atoms/button"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
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

    const handleMessage = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.value === ""){
            handleHide(true)
        } else {
            handleHide(false)
        }
        setMessage((e.target as HTMLInputElement).value );
    }
    return (
        <View className="flex w-full">
            <View>
                <Image source={{uri: "avatar"}} className="w-32 h-32"/>
                <Input label="Create Post" placeholder="What's on your mind?" className="flex flex-grow self-stretch" value="message" onChange={handleMessage}/>
                <View className="flex rounded-full bg-white p-4">
                    <AntDesign name="picture" size={16} color="black" />
                </View>
            </View>
            <View className={`flex flex-row justify-between ${hide  && "hidden"}`}>

            </View>
            <Button onPress={submitPost}>Post</Button>
        </View>
    )
}