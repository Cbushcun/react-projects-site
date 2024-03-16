import Footer from "../../components/Footer";
import ProjectThumbnail from "./components/ProjectThumbnail";
import projectsData from "./projects.json";

export default function ProjectLanding() {
  return (
    <section className="text-stone-200 bg-stone-800 flex flex-col min-h-screen">
      <div className=" flex flex-col mx-auto max-w-96 items-center gap-4 mt-10">
        <h1 className="text-5xl">Projects</h1>
        <div className="w-full h-1 bg-green-400"></div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid gap-3 px-3 text-xl sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project, index) => (
          <ProjectThumbnail
            key={index}
            project={project}
            handleClick={() => projectOnClick(project)}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
}
