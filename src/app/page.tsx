import DogGameBuilder from '@/components/DogGame/DogGameBuilder'
import NavigationBar from '@/components/NavigationBar'
import StarBuilder from '@/components/Stars/StarBuilder'

export default function Home() {
  return (
    <div>
        <div>
            <NavigationBar />
            {/* <StarBuilder /> */}
            <DogGameBuilder />
        </div>
    </div>
  )
}
