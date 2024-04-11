import { Image, View, Text, ScrollView } from "react-native"
import { Input } from "../atoms/input"
import { Button } from "../atoms/button"
import { AntDesign, FontAwesome, Feather  } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import React from "react";
import { makePost } from "../../api/postApi";
import { useAuth } from "../../providers/UserProvider";
import { storePosts } from "../../utils/posts";
import NetInfo from '@react-native-community/netinfo';
import * as ImagePicker from 'expo-image-picker';

export const CreatePost = () => {
    const [hide, setHide] = useState(true)
    const [message, setMessage] = useState('')
    const { user } = useAuth()
    const [image, setImage] = useState<string[]|null>(null);
    const [loading, setLoading] = useState(false)
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets.map((asset) => asset.uri));
    }
  };
    
    const handleHide = (state: boolean) => {
        setHide(state)
    }
    
    const submitPost = async () => {
        const {isConnected} = await NetInfo.fetch()
        try {
            setLoading(true)
            if(!isConnected) {
                await storePosts({message, timestamp: new Date().toISOString(), images: ["https://freestyle-images.s3.us-east-2.amazonaws.com/IMG_20230223_093405.jpg"]})
            } else if( user ) {
                await makePost(user?.id, message, ["https://freestyle-images.s3.us-east-2.amazonaws.com/IMG_20230223_093405.jpg"])
            } else {
                throw new Error("User not found")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleMessage = (text: string) => {
        setMessage(text);
    }
    useEffect(() => {
        if(message === "" && !image) {
            handleHide(true)
        } else {
            handleHide(false)
        }
    }, [message, image])
    return (
        <View className="flex flex-col self-stretch p-4 space-y-2">
            <View className="flex flex-row items-start space-x-2">
                <Image src={'https://picsum.photos/200'} alt="avatar" className="w-8 aspect-square rounded-full"/>
                <Input placeholder="Begin a post" value={message} onChangeText={handleMessage}/>
                <Button className="flex rounded-full bg-teal-100 p-2 items-center justify-center" onPress={pickImage}>
                    <AntDesign name="picture" color="black" size={16}/>
                </Button>
            </View>
            {image && <View className="flex flex-col items-end">
                <View className="flex flex-row self-stretch justify-end">
                    <Button variant={"ghost"} className="w-16 justify-end" onPress={()=> setImage(null)}>
                        <Feather name="x" color="black" size={16}/>
                    </Button>
                </View>
                <ScrollView horizontal>
                    {image && image.map((image) => <Image source={{ uri: image }} className={`w-64  aspect-[4/3] `} key={image}/>) }
                </ScrollView>
            </View>}
            <View className={`${hide  ? "hidden" : "flex"} flex-row justify-between`}>
                <Button onPress={submitPost} className="w-full" loading={loading}>
                    <Text className="text-white">Post</Text>
                    <FontAwesome name="send" color="white" size={16}/>
                </Button>
            </View>
        </View>
    )
}