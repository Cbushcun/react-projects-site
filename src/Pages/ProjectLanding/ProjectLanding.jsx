import Footer from "../../components/Footer";
import projectsData from "./projects.json";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

export default function ProjectLanding() {
  return (
    <>
      <NavBar />
      <section className="font-inconsolata flex min-h-screen flex-col bg-stone-800 pt-32 text-stone-200">
        <div className="mb-10 flex place-content-center">
          <table className=" w-full max-w-7xl caption-bottom sm:w-5/6">
            <caption className="text-center text-sm text-stone-200">
              Currently in the process of preparing and developing more projects
              for this list, stay tuned.
            </caption>
            <thead className="bg-stone-900">
              <tr>
                <th className="py-1 pl-5">Project</th>
                <th className="hidden py-1 xl:table-cell">Repo Link</th>
                <th className="hidden py-1 sm:table-cell">Demo Link</th>
                <th className="float-end py-1 pr-5 sm:float-none">Year</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.projects.map((project, index) => (
                <tr className={`${index % 2 === 0 ? "" : "bg-stone-700"}`}>
                  <td className="whitespace-nowrap py-1 pl-5">
                    {project.name}
                  </td>
                  <td className="hidden whitespace-nowrap py-1 xl:table-cell">
                    <a
                      href={`${project.repoLink}`}
                      className={
                        project.repoLink
                          ? `text-green-400 underline visited:text-purple-400 hover:text-green-600`
                          : "hover:cursor-default"
                      }
                    >
                      {project.repoLink ? project.repoLink : "N/A"}
                    </a>
                  </td>
                  <td className="hidden whitespace-nowrap py-1 sm:table-cell">
                    <Link
                      to={project.hrefLink}
                      className={
                        project.hrefLink
                          ? `text-green-400 underline visited:text-purple-400 hover:text-green-600`
                          : "hover:cursor-default"
                      }
                    >
                      {project.liveLink ? project.liveLink : "N/A"}
                    </Link>
                  </td>
                  <td className="float-end whitespace-nowrap py-1 pr-5 sm:float-none">
                    {project.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </section>
    </>
  );
}
