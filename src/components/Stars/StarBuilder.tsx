import SingleStar from "./SingleStar";
import Intro from "../Intro";
// import {useWindowDimensions} from 'react-native';

const StarBuilder = () => {
    // const {height, width} = useWindowDimensions();
    let width = 100;
    let height = 100;
    let maxDelay = 3500;

    return (
        // temp star position and whatnot
        <div className="w w-">
            <Intro />
            <SingleStar x={(Math.random() * (width + 1)) + 1} y={(Math.random() * (height + 1)) + 1} />
            <SingleStar x={(Math.random() * (width + 1)) + 1} y={(Math.random() * (height + 1)) + 1} />
            <SingleStar x={(Math.random() * (width + 1)) + 1} y={(Math.random() * (height + 1)) + 1} />
            <SingleStar x={(Math.random() * (width + 1)) + 1} y={(Math.random() * (height + 1)) + 1} />
            <SingleStar x={(Math.random() * (width + 1)) + 1} y={(Math.random() * (height + 1)) + 1} />
            <SingleStar x={(Math.random() * (width + 1)) + 1} y={(Math.random() * (height + 1)) + 1} />
        </div>
    )
}

export default StarBuilder;