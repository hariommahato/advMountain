import axios from 'axios'

const UPLOAD_URL = "https://api.cloudinary.com/v1_1/dijky1jjg/image/upload"

export async function uploadImage(data) {
    try {
        const response = await axios.post(UPLOAD_URL, data)
        return {
            error: false,
            data: response
        }
    } catch (err) {
        return {
            error: true,
            data: err
        }
    }
}