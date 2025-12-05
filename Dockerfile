# Use the official Node.js LTS image
FROM node:lts

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies - Somehow npm install was throwing an error - had to use defined version
RUN npm install -g npm@11.2.0 

# Copy the rest of the application
COPY . .

# Command to run the app
CMD ["node", "hello.js"]
#Test comment