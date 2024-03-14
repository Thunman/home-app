import axios from "axios";

export const login = async (username: string, password: string) => {
  const response = await axios.post("thunman.servebeer.com/login", {
    username,
    password,
  });
  console.log(response);
  return response;
};
