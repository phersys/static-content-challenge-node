# Set the base image for your Dockerfile
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application source code to the working directory
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]
