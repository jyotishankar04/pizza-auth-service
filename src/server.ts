import app from "./app";
import env from "./config";
import logger from "./config/logger";

const startServer = () => {
  const PORT = env.PORT;
try {

  app.listen(PORT, () => {
    logger.info(`Server running on port `, {
      port: PORT,
    });
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
};

startServer();