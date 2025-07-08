import app from "./app";
import env from "./config/index";

const startServer = () => {
  const PORT = env.PORT;
try {

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
};

startServer();