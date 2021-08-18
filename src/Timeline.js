import "./Timeline.css"
import { useState } from "react";
import hangman from"./imgs/hangman.png" ;
import lightout from"./imgs/lightout.png" ;
import pokemon from"./imgs/pokemon.jpeg" ;
import todoapp from"./imgs/todoapp.png" ;


const data ={
    2:[hangman,"A React Js Hangman Game The game  only allow six wrong guesses after that it is over."],
    1:[todoapp,"This is an App to save ,edit,check,delete your to do stuffs at a single place with client side storage made using React Js  "],
    3:[pokemon,"This a react based pokecard game of 2 player hand.Based on  the total experience for each hand of pokemon and determine the winner"],
    4:[lightout,"Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off"]
}
const data2 ={
    1:['To-Do-App'],
    2:['Hangman'],
    3:['Pokemon'],
    4:['LightOut']

}
const skilldata={
    1:['React','Hooks','JS'],
    2:['React','CSS','JS'],
    3:['React','CSS','JS'],
    4:['React','CSS','JS'],
}




function Timeline(props){

    const[Id,SetId] = useState(1);
  

    return(
        <div className="Timeline">
            
                <span className="Timeline-Nav-Left">
                <svg  onClick={()=>{Id>1?SetId(Id-1):SetId(4)}}  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                 <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>

                </span>
                <span className="Timeline-Nav-Right" >
                <svg  onClick={()=>{Id<4?SetId(Id+1):SetId(1)}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>

                </span>

            <div className="Timeline-Content">
                
                <div className="Timeline-Content-Project">
                    <div className="Timeline-Content-Project-Img">
                        <img alt="img project" src={data[Id][0]} className="Timeline-Content-Project-Imgs">
                        </img>

                    </div>
                    <div className="Timeline-Content-Project-Description">
                        <h3 className="Timeline-Content-Project-Description-Title">
                            {data2[Id][0]}

                        </h3>
                        <p className="Timeline-Content-Project-Description-Title-Text">
                            {data[Id][1]}

                        </p>
                        <div className="Timeline-Content-Project-Description-Footer">
                            {skilldata[Id].map((skill)=>{
                                return (<span> {skill} </span>)
                            })}

                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Timeline;