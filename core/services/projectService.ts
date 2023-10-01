import ProjectDAO from "../DAO/projectDAO";

class ProjectService {
  static async getAllProjects() {
    const projects = ProjectDAO.getAllProjects();
    return projects;
  }
}

export default ProjectService;
