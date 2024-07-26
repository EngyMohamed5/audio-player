## JavaScript Audio Player

This repository contains a JavaScript-based audio player that offers a simple yet functional interface for playing, pausing, and navigating through a playlist of audio tracks.

### Features

- **Play/Pause Functionality**: Toggle between playing and pausing the current track with a single button.
- **Next and Previous Tracks**: Easily navigate to the next or previous track in the playlist.
- **Track Info Display**: View the title and image associated with the current audio track.
- **Track Progress Slider**: Monitor the current time of the audio track and seek to different parts using a slider.
- **Persistent State**: The player remembers the last played track and its state using `localStorage`, ensuring the same track and position are loaded on page reload.

### How It Works

1. **Initialization**: On page load, the player initializes with the last played track stored in `localStorage`. It updates the display and audio source accordingly.
2. **Play/Pause Button**: Clicking this button toggles between playing and pausing the current track, updating the button's background image to reflect the current state.
3. **Next and Previous Buttons**: These buttons allow users to move through the playlist, updating the track info display and playing the selected track.
4. **Track Progress Slider**: This slider displays the current playback time and allows users to seek to different parts of the track. It updates in real-time as the audio plays.

### Usage

To use this audio player, simply clone the repository and open the `index.html` file in your browser. Ensure your audio and image files are placed in the appropriate directories as specified in the `data` array.

### Example Data Structure

```javascript
let data = [
    {
        id: 0,
        imgsrc: "img/cow.jpg",
        audio: "audio/Doja Cat - MOOO! (Audio).mp3",
        title : "moo doja cat"
    },
    {
        id: 1,
        imgsrc: "./img/dog.jpg",
        audio: "./audio/Ahwa Qamaran.mp3",
        title : "Ahwa qamaran song"
    },
    {
        id: 2,
        imgsrc: "./img/cat.jpg",
        audio: "./audio/Pedro Capó, Farruko - Calma.mp3",
        title : "calma song"
    },
];
```
