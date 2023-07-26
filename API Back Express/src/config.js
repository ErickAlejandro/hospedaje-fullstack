import {config} from 'dotenv'
config();

export default{
    port: process.env.PORTAPI || 3000,
    USER: process.env.USERSERVER || "",
    PASSWORD: process.env.PASSWORDSERVER || "",
    SERVER: process.env.SERVER || "",
    DATABASE: process.env.DATABASE || "",
}