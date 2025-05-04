import NavigationBar from '@/components/NavigationBar'
import Intro from "@/components/Intro";
import BackgroundDots from '@/components/BackgroundDots';
import DogGameBuilder from '@/components/DogGame/DogGameBuilder';

export default function Home() {
  return (
    <div className="no-scrollbar font-mono overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col">
            <div className="">
                <NavigationBar />
            </div>

            <div className="space-y-128">
                <div>
                    <Intro />
                </div>
            </div>

            <div>
                <BackgroundDots isAnimated={true}/>
            </div>
        </div>
    </div>
  )
}


