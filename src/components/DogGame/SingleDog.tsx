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
    const [src, setSrc] = useState("dogs/" + dogColor + "_dog/" + dogColor + "_dog_still_right.png")
    // const [src, setSrc] = useState("dogs/red_dog/red_dog_still_right.png")
    const [xPos, setXPos] = useState(x)
    const [yPos, setYPos] = useState(y)


    useEffect(() => {
        const interval = setInterval(() => {
            startMove()
            // console.log("Fired")
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    function startMove() {
        console.log(src)
        console.log(dogColor)
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            setRightMoveEffect(true)
            setSrc("dogs/" + dogColor + "_dog/" + dogColor + "_dog_walk_right_full.gif")
            // setSrc("dogs/red_dog/red_dog_walk_right_full.gif")
        }
        else {
            setLeftMoveEffect(true)
            setSrc("dogs/" + dogColor + "_dog/" + dogColor + "_dog_walk_left_full.gif")
            // setSrc("dogs/red_dog/red_dog_walk_left_full.gif")
        }
    }

    function clearMove() {
        // last move was to the right
        if (rightMoveEffect) {
            setXPos(xPos + 500)
            console.log("id: " + src)
            setSrc("dogs/" + dogColor + "_dog/" + dogColor + "_dog_still_right.png")
            console.log("id: " + src)
            // setSrc("dogs/red_dog/red_dog_still_right.png")
        }
        else {
            setXPos(xPos + 200)
            setSrc("dogs/" + dogColor + "_dog/" + dogColor + "_dog_still_left.png")
            // setSrc("dogs/red_dog/red_dog_still_left.png")
        }
        setRightMoveEffect(false)
        setLeftMoveEffect(false)
    }

    const handleNameChange = (event: any) => {
        setDogName(event.target.value)
    }

    const handleColorChange = (newColor: CollarColor) => {
        setDogColor(newColor)
        setSrc("dogs/" + dogColor + "_dog/" + dogColor + "_dog_still_right.png")
        console.log(dogColor)
    }

    return (
        <div>
            <Popup trigger={
                <img className={`${rightMoveEffect && "animate-DogWalkRight"} ${leftMoveEffect && "animate-DogWalkLeft"}`} 
                    onAnimationEnd={clearMove}
                    src={src} alt="Dog with red collar" width="130" height="130" 
                    style={{position: "absolute", left: `${xPos}px`, top: `${yPos}px`}}/>} 
                    position="top right">
                <div className="bg-white px-2 py-2 rounded-lg">
                    <div className="justify-center text-black">
                        Edit {dogName}
                    </div>
                    <div>
                        <textarea className="text-black" onChange={handleNameChange} value={dogName}/>
                    </div>
                    <div className="justify-center text-black">
                        Edit Collar Color
                    </div>
                    <div className="text-white justify-center">
                        <button onClick={() => handleColorChange(CollarColor.Red)} className="bg-red-600">Red</button>
                        <button onClick={() => handleColorChange(CollarColor.Orange)} className="bg-orange-600">Orange</button>
                        <button onClick={() => handleColorChange(CollarColor.Yellow)} className="bg-yellow-600">Yellow</button>
                        <button onClick={() => handleColorChange(CollarColor.Green)} className="bg-green-600">Green</button>
                        <button onClick={() => handleColorChange(CollarColor.Blue)} className="bg-blue-600">Blue</button>
                        <button onClick={() => handleColorChange(CollarColor.Purple)} className="bg-purple-600">Purple</button>
                    </div>
                </div>
            </Popup>
            <h1 className={`${rightMoveEffect && "animate-DogWalkRight"} ${leftMoveEffect && "animate-DogWalkLeft"}` }  
                style={{position: "absolute", left: `${xPos}px`, top: `${yPos-30}px`}}>{dogName}</h1>
            
        </div>
    )
}

export default SingleDog;