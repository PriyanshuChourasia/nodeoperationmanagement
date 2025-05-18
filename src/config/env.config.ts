import dotenv from "dotenv";
import {z} from "zod";


dotenv.config();


const envSchema = z.object({
    PORT: z.string().default("8004")
});

const parsedEnv = envSchema.safeParse(process.env.dev);


if(!parsedEnv.success){
    console.error("Invalid environmental variables: ",parsedEnv.error.format());
    process.exit(1);
}

export const env = parsedEnv.data;