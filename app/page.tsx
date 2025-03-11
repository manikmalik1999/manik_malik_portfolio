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
import SplashCursor from '@/components/ui/SplashCursor';



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <SplashCursor />
        <FloatingNav navItems={navItems} />
        <Hero />
        <MyIntroduction/>
        <Grid />
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
