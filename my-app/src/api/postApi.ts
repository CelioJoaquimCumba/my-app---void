import { axiosInstance } from "./axiosInstance"

export const getPosts = async (): Promise<any[]> => {
    try {
        const response = await axiosInstance.get("posts/all")
        return response.data
    } catch(e) {
        console.log(e.response.data)
        throw e
    }
}
export const makePost = async(userId:string, message: string, images: any) => {
  try {
    await axiosInstance.post("quiz/submit", {userId, message, images})
  } catch(e){
    console.log(e.response.data)
    throw e
  }
}