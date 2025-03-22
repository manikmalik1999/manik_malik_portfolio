import InfiniteMenu from "./ui/InfiniteMenu";
import { projectsNew } from "@/data";

const Projects = () => {
    const handleOpenResume = () => {
      window.open('/resume.pdf', '_blank');
    };
  
    return (
      <div className="py-20" id="projects"> {/* Changed background color */}
        <h1 className="heading">
          My <span className="text-purple">Projects</span>
        </h1>
        <div className="py-20" style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={projectsNew}/>
        </div>
      </div>
    );
  };
  
  export default Projects;