"use client"
import { CollarColor } from "@/EnumStates/DogCollarColors";
import { useState } from "react";

const SingleDog = ({id, x, y, color} : {id:string, x: number, y: number, color : CollarColor}) => {
    const [dogID, setDogID] = useState(id);
    const [dogColor, setDogColor] = useState(color)
    const [rightMoveEffect, setRightMoveEffect] = useState(false)
    const [leftMoveEffect, setLeftMoveEffect] = useState(false)
    const [src, setSrc] = useState("dogs/red_dog/red_dog_still_right.png")
    const [xPos, setXPos] = useState(x)
    const [yPos, setYPos] = useState(y)

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
            <img className={`${rightMoveEffect && "animate-DogWalkRight"} ${leftMoveEffect && "animate-DogWalkLeft"}`} 
            onClick={startMove}
            onAnimationEnd={clearMove}
            src={src} alt="Dog with red collar" width="170" height="170" style={{position: "absolute", left: `${xPos}px`, top: `${yPos}px`}}/>
        </div>


        
    )
}

export default SingleDog;