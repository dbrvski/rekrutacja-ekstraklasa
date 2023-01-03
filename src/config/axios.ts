import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.sportradar.com/soccer/trial/v4/en",
  params: {
    api_key: "t8wgeggpwpbjqykyjsghsvyz",
  },
});
