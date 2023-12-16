import DogGameBuilder from '@/components/DogGame/DogGameBuilder'
import NavigationBar from '@/components/NavigationBar'
import SelfInformation from '@/components/SelfInformation/SelfInformation'
import StarBuilder from '@/components/Stars/StarBuilder'

export default function Home() {
  return (
    <div className="snap-y">
        <div className="snap-top flex flex-col">
            <div className="sticky animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[3500ms]">
                <NavigationBar />
            </div>

            <div className="space-y-64">
                <div>
                    <StarBuilder />
                </div>
                
                <div className="animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[3500ms]">
                    <DogGameBuilder/>
                </div>
            </div>
        </div>

        <div className="snap-center h-screen">
            <div className="animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[3500ms]">
                    <SelfInformation />
            </div>
        </div>
    </div>
    
  )
}
