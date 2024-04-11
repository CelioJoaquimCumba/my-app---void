import React, { useEffect, useState } from "react"
import { NavBar } from "../components/molecules/navbar"
import { CreatePost } from "../components/molecules/create-post"
import { Post } from "../components/molecules/post"
import { ScrollView, View } from "react-native"
import { BottomBar } from "../components/molecules/bottom-bar"
import { getPosts, makePost } from "../api/postApi"
import NetInfo from '@react-native-community/netinfo'
import { useAuth } from "../providers/UserProvider"
import { removePosts } from "../utils/posts"

const dummy_posts = [
    {
        id: "123",
        author: "Johann",
        timeStamp: "10:00",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit suscipit   ",
        images: ["https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400"]
    },
    {
        id: "234",
        author: "Johann",
        timeStamp: "10:00",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit suscipit   ",
        images: ["https://freestyle-images.s3.us-east-2.amazonaws.com/IMG_20230223_093405.jpg"]
    },
    {
        id: "456",
        author: "Johann",
        timeStamp: "10:00",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit suscipit   ",
        images: ["https://freestyle-images.s3.us-east-2.amazonaws.com/IMG_20230223_093405.jpg"]
    }
]

export const MainPage = () => {
    const [posts, setPosts] = useState(dummy_posts)
    const { user } = useAuth()
    useEffect(() => {
        const requestPosts = async () => {
            try {
                const posts = await getPosts()
                setPosts(posts)
            } catch (error) {
                console.log(error)
            }
        }
        requestPosts()
    })
    useEffect(() => {
        const checkInternet = async () => {
            const {isConnected} = await NetInfo.fetch()
            const submitPost = async(post: any) => {
                if(!user) {
                    throw new Error("User not found")
                }
                await makePost(user?.id, post.message, post.images)
            }
            if(isConnected) {
                const submitPosts = async () => {
                    try {
                        const posts = await getPosts()
                        if(posts && posts.length > 0) {
                            posts.map((post, index) => {
                                submitPost(post)
                            })
                        }
                        await removePosts()
                    } catch(e) {
                        console.log(e)
                    }
                }
                submitPosts()
            }
        }
    }, [])
    return(
        <View className="flex flex-col space-y-4 border border-gray-200 pt-8">
            <NavBar />
            <CreatePost />
            <ScrollView>
                {dummy_posts.map((post, index) => <Post key={index} author={post.author} timeStamp={post.timeStamp} message={post.message} images={post.images}/>) }
            </ScrollView>
            <BottomBar />
        </View>
    )
}