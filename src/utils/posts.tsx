import * as SecureStore from 'expo-secure-store';

const POST_KEY = "post"

interface Post {
    message: string
    timestamp: string
    images: Array<any>
}
export const storePosts = async ({message, timestamp, images}: {message: string, timestamp: string, images:any}) => {
    try {
        if (!message || !timestamp || !images) {
            throw new Error("Not all data provided");
        }
        let newPost: Post = {
            message,
            timestamp,
            images}
        let posts = await getPosts()
        if(!posts) {
            posts = [newPost]
        } else {
            posts.push(newPost)
        }
        await SecureStore.setItemAsync(POST_KEY, JSON.stringify(posts));
    } catch (e) {
        console.log(e);
    }
}

export const getPosts = async (): Promise<Array<any> | null> => {
    try {
        const post = await SecureStore.getItemAsync(POST_KEY).then(post => post).catch(e => console.log(e));
        if(!post) {
            return null;
        }
        return JSON.parse(post);
    } catch (e) {
        console.log(e);
        return null
    }
}

export const removePosts = async () => {
    try {
        await SecureStore.deleteItemAsync(POST_KEY);
    } catch (e) {
        console.log(e);
    }
}