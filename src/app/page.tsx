import NavigationBar from '@/components/NavigationBar'
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="font-mono overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col">
            <div className="animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[3500ms]">
                <NavigationBar />
            </div>

            <div className="space-y-128">
                <div>
                    <Intro />
                </div>
            </div>
        </div>
    </div>
    
  )
}


