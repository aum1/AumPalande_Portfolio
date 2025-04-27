import NavigationBar from '@/components/NavigationBar'
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="no-scrollbar font-mono overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col">
            <div className="fade-up three">
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


