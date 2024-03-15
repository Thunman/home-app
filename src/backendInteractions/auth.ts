import axios from "axios";

export const login = async (username: string, password: string) => {
  const response = await axios.post(
    "https://thunman.servebeer.com/api/users/login",
    {
      username: username,
      password: password,
    }
  );
  console.log(response);
  return response;
};
