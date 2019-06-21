import { combineReducers } from 'redux';

// Reducers
const songReducers = () => {
    return [
        {title: "Dumebi", duration: "4:05"},
        {title: "Uyo Meyo", duration: "3:15"},
        {title: "Iheanacho", duration: "4:19"},
        {title: "Jealous", duration: "3:45"}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer
})