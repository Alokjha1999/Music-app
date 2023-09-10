import "./index.css";
import forward from '../../public/forward.png';
import backward from '../../public/backward.png';
import play from '../../public/play.png';
import pause from '../../public/pause.png';
import volumeIcon from '../../public/volume.png';
import muteVolume from '../../public/mute-volume.png';

import { useState,useEffect } from "react";

let track_list = [
    {
      name: "Night Owl",
      artist: "Broke For Free",
      image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
    },
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
    },
  ];
  
let isPlaying = false;
let curr_track = null;
let curr_track_id = 0;

export function Player(props){
    let [value , setPlayerSlider] = useState("0");
    let [volume, setVolumeSlider] = useState("50");

    useEffect(()=>{
        curr_track = document.createElement("audio");
        curr_track.src=track_list[curr_track_id].path;
        curr_track.load();
    },[])

    return(
    <div className="player-container">
        <div id="player-slider-container">
            <input type="range" id="player-slider" value={value} min="1" max="100"  className="slider" onChange={(e)=>handlePlayerSlider(e,setPlayerSlider)}/>
        </div>
        <div id="player">
            <div id="buttons">
                <div id="backward-button" onClick={()=>handlePreviousTrack()}>
                    <img src={backward} alt="backward-player-button" height="30px" width="30px" />
                </div>
                <div id="playpause-button"  onClick={()=>handlePlayPause()}>
                    <img src={play} id="playpause" alt="playpause-player-button" height="25px" width="25px"  />
                </div>
                <div id="forward-button" onClick={()=>handleNextTrack()}>
                    <img src={forward} alt="forward-player-button" height="30px" width="30px"  />
                </div>
            </div>
            <div className="songName-description">
                <div className="imageSection"> <img alt="cover" src={props.image} className="card-imageDimension" /></div>
                <div className="descriptionSection">
                    <div className="songName">{props.name}</div>
                    <div className='artist'>Song <div className="whiteDot"></div>{props.artist}</div>
                </div>
            </div>
            <div id="volume-slider">
                <img src={volumeIcon} alt="volume" id="volumeIcon" className="voulmeIcon"/>
                <input type="range" id="volume-slider" className="slider" value={volume} min="1" max="100" onChange={(e)=>handleVolumeSlider(e,setVolumeSlider)}/>  
            </div>
        </div>
    </div>
)}

function loadTrack(curr_track_id){
    curr_track.src=track_list[curr_track_id].path;
    curr_track.load();
    curr_track.play();
}

function handlePlayPause(){
    let element = document.getElementById('playpause');
    if(isPlaying === true){
        curr_track.pause();
        isPlaying = false;
        element.src=pause;
    }
    else{
        curr_track.play();
        isPlaying = true;
        element.src=play;
    }
}

function handlePlayerSlider(e,setPlayerSlider){
    console.log(e.target.value);
    setPlayerSlider(e.target.value);
}

function handleVolumeSlider(e,setVolumeSlider){
    let element =  document.getElementById("volumeIcon");
    if(e.target.value  === "1"){
        element.src=muteVolume;
    }else{
        element.src=volumeIcon; 
    }
    setVolumeSlider(e.target.value);
    curr_track.volume = e.target.value/100;
}


function handleNextTrack(){
    if(curr_track_id < track_list.length -1){
        curr_track_id = curr_track_id+1;
    }else{
        curr_track_id = 0;
    }
    loadTrack(curr_track_id);
}

function handlePreviousTrack(){
    if(curr_track_id > 0)
        curr_track_id=0;
    else
        curr_track_id = curr_track_id - 1;
    
    loadTrack(curr_track_id);
}