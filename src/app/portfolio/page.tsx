'use client'
import NavigationBar from '@/components/NavigationBar';
import ProjectBuilder from '@/components/ProjectBuilder';
import Technologies from '@/components/Technologies';
import BackgroundDots from '@/components/BackgroundDots';

export default function Portfolio() {
  return (
    <div>
      <NavigationBar />
      <Technologies />
      <ProjectBuilder />
      <BackgroundDots isAnimated={false}/>
    </div>
  );
}
