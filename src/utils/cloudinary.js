import { v2 as cloud } from 'cloudinary'
import fs from 'fs'


cloud.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloud.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been succesfully uploaded on coudinary
        // now response variable have the property (final url)
        // console.log("file is uploaded on cloudinary", response.url)
        console.log(response);
        fs.unlinkSync(localFilePath);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload operation got failed
        return null
    }
}

export {uploadOnCloudinary}