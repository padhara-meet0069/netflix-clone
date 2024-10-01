import dotenv from 'dotenv'

dotenv.config()

export const ENV_VAARS = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV : process.env.NODE_ENV,
    TMDM_API_KEY:process.env.TMDM_API_KEY

}