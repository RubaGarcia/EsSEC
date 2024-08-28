import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
    origin:function(origin, callback){
        const whitelist = [process.env.FRONTEND_URL];

        
        whitelist.push(undefined)
        callback(null, true);
    }
}