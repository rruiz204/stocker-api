import Jinky from "../Jinky";
import logger from "@services/LoggingService";

const login = new Jinky(async (req) => {
  console.log(req.body);
  
  logger.info("my first log man!");

  return {
    data: { message: "credentials received!" }
  };
}).build();


const AuthController = { login };
export default AuthController;