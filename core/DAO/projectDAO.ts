import Project from "../models/projects";
import { ProjectDTO } from "../types";

class ProjectDAO {
  /**
   * Returns all Projects in the database.
   * @returns {Promise<[ProjectDTO]>}
   */
  static async getAllProjects() {
    const response = await Project.findAll();
    const projects = response.map((project) => project.dataValues);
    return projects;
  }

  static async createProject(project: any) {
    await Project.create(project);
  }

  static async deleteProject(id: number) {
    const project = await Project.findByPk(id);
    if (project != null) {
      await project.destroy();
    }
  }
}

export default ProjectDAO;
