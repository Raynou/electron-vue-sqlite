import { DataTypes, Model } from "sequelize";
import sequelize from "../database/conection";

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize, modelName: "Projects", tableName: "PROJECTS", timestamps: false }
);

export default Project
