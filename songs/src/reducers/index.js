import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "One OK Rock", duration: "4:29" },
    { title: "Hijau Daun", duration: "4:10" },
    { title: "Armada", duration: "3:59" },
    { title: "Secondhand Serenade", duration: "4:59" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
