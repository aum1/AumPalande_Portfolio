"use client"
import { CollarColor } from "@/EnumStates/DogCollarColors";
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

const SingleDog = ({id, name, x, y, color} : {id: string, name: string, x: number, y: number, color : CollarColor}) => {
    const [dogName, setDogName] = useState(name)
    const [dogID, setDogID] = useState(id);
    const [dogColor, setDogColor] = useState(color)
    const [rightMoveEffect, setRightMoveEffect] = useState(false)
    const [leftMoveEffect, setLeftMoveEffect] = useState(false)
    const [src, setSrc] = useState("dogs/red_dog/red_dog_still_right.png")
    const [xPos, setXPos] = useState(x)
    const [yPos, setYPos] = useState(y)

    useEffect(() => {
        const interval = setInterval(() => {
            startMove()
            // console.log("Fired")
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    function startMove() {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            setRightMoveEffect(true)
            setSrc("dogs/red_dog/red_dog_walk_right_full.gif")
        }
        else {
            setLeftMoveEffect(true)
            setSrc("dogs/red_dog/red_dog_walk_left_full.gif")
        }
    }

    function clearMove() {
        // last move was to the right
        if (rightMoveEffect) {
            setXPos(xPos + 500)
            setSrc("dogs/red_dog/red_dog_still_right.png")
        }
        else {
            setXPos(xPos + 200)
            setSrc("dogs/red_dog/red_dog_still_left.png")
        }
        setRightMoveEffect(false)
        setLeftMoveEffect(false)
    }

    return (
        <div>
            <Popup trigger={
                <img className={`${rightMoveEffect && "animate-DogWalkRight"} ${leftMoveEffect && "animate-DogWalkLeft"}`} 
                    onClick={startMove}
                    onAnimationEnd={clearMove}
                    src={src} alt="Dog with red collar" width="130" height="130" 
                    style={{position: "absolute", left: `${xPos}px`, top: `${yPos}px`}}/>} 
                    position="right center">
                <div>Popup content here !!</div>
            </Popup>
            <h1 className={`${rightMoveEffect && "animate-DogWalkRight"} ${leftMoveEffect && "animate-DogWalkLeft"}` }  
                style={{position: "absolute", left: `${xPos}px`, top: `${yPos-30}px`}}>{dogName}</h1>
            
        </div>
    )
}

export default SingleDog;