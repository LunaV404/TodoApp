import { cleanEnv } from "envalid";
import { port, str } from "envalid";

export default cleanEnv(process.env, {
    MONGODB_URI_STRING: str(),
    PORT: port(),
})