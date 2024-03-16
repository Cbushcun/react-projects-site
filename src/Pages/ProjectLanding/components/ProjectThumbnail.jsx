function ProjectThumbnail({ handleClick, project }) {
  {
    /* Assume 'project' is an object with this structure
    {
      "name": "",
      "desc": "",
      "technologies": "",
      "designer": "",
      "imgLink": "",
      "repoLink": "",
      hrefLink: ""
    }
*/
  }

  return (
    <a href={project.hrefLink}>
      <img className="m-auto bg-cover bg-center" src={`${project.imgLink}`} />
      <p className="text-center">{project.name}</p>
    </a>
  );
}

export default ProjectThumbnail;
