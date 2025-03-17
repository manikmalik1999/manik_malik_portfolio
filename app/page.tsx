import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import { ResearchPublications } from '@/components/ResearchPublications'; // Import the new component
import { MyIntroduction } from '@/components/MyIntroduction'; // Import the new component
// import SplashCursor from '@/components/ui/SplashCursor';
import TechStacks from '@/components/TechStacks';
import { projectsNew } from '@/data';
import InfiniteMenu from '@/components/ui/InfiniteMenu';
import FlowingMenuDemo from '@/components/TimelineItems';

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  }]

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <SplashCursor /> */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <MyIntroduction/>
        <TechStacks/>
        <FlowingMenuDemo/>
        {/* <TimelineDemo/> */}
        {/* <Grid /> */}
        <ResearchPublications /> {/* Add the Research Publications section */}
        <Experience />
        <RecentProjects />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
