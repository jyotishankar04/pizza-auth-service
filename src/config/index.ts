import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
};

 const env = Object.freeze(config);

 export default env; 