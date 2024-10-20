
import React,{ useState,useEffect } from "react";
import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";

const PlaySound = () =>{

    const [play,setPlay] = useState(false);


    useEffect(() =>{
        const audio = new Audio('/creepy-party-short-version-2-248124.mp3');
        if(play){
            audio.play();
        }
        return () => {
            audio.pause();
        }
    },[play]);

    return(
        <div className="flex justify-center items-center h-screen">
            <button onClick={() => setPlay(!play)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 transform hover:scale-105">
                {play?<MdMusicOff/>:<MdMusicNote/>}</button>
        </div>
    )
}
export default PlaySound;
