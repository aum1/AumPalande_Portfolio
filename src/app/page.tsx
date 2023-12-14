import Image from 'next/image'
import NavigationBar from '@/components/NavigationBar'
import SingleStar from '@/components/Stars/SingleStar'

export default function Home() {
  return (
    <div>
        <div>
            <NavigationBar />
            <SingleStar x={1} y={1} />
        </div>
    </div>
  )
}
