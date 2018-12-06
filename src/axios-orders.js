import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-29a10.firebaseio.com/"
});

export default instance;
