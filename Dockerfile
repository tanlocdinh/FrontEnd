# Use the official Node.js image as the base
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -f

# Copy the rest of the application code
COPY . .

# Expose the port the API will run on
EXPOSE 8080

# Start the API server
CMD ["npm", "start"]
