import axios from "axios";

const KEY = "AIzaSyD93yd12xYYSxqOhplY3YaiG_z20hjlf7U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
