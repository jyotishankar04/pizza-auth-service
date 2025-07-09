FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Bundle app source
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 5501

# Run the app
CMD [ "npm", "run", "dev" ]