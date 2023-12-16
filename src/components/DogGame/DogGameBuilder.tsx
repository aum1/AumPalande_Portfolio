import GroundBuilder from "./GroundBuilder";
import SingleDog from "./SingleDog";
import { CollarColor } from "@/EnumStates/DogCollarColors";

const DogGameBuilder = () => {
    return (
        <div>
            <SingleDog id={"1"} name={"Doggy"} x={500} y={0} color={CollarColor.Yellow}/>
            <SingleDog id={"2"} name={"Second Dog"} x={900} y={0} color={CollarColor.Purple}/>
            <GroundBuilder />
        </div>
    )
}

export default DogGameBuilder;