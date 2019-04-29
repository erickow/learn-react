import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9921df4d85161cd66f3556ae26eb1e61f04123876b8679ced97c0b74881fe699"
  }
});
