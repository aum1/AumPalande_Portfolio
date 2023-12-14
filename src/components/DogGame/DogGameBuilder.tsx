import GroundBuilder from "./GroundBuilder";
import SingleDog from "./SingleDog";
import { CollarColor } from "@/EnumStates/DogCollarColors";

const DogGameBuilder = () => {
    return (
        <div>
            <SingleDog id={"1"} x={100} y={100} color={CollarColor.Red}/>
            <GroundBuilder />
        </div>
    )
}

export default DogGameBuilder;