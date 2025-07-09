import { createLogger, transports, format } from "winston";
import env from ".";
 const logger = createLogger({
    level: "info",
    defaultMeta: { service: "auth-service" },
    transports: [
        new transports.File({ filename: "error.log", dirname: "logs", level: "error" }),
        new transports.File({ filename: "combined.log", dirname: "logs" }),
        new transports.Console({
            level: "info",
            format: format.combine(
                format.timestamp(),
                format.colorize(),
                format.json()
            ),
            silent: env.NODE_ENV === "test",
        }),
    ],
});

export default logger;