import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("sqlite:./core/database/data.db");
process.on("SIGINT", async () => {
  await sequelize.close();
  process.exit(0);
});

export default sequelize