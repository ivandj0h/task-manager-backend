# Use the official Node.js image as the base image
FROM node:20

# Install build essentials for building native modules
RUN apt-get update && apt-get install -y build-essential

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]

