# Use a Node.js base image
FROM node:18-alpine as BASE_IMAGE

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code to the working directory
COPY . .

# for lint
FROM BASE_IMAGE as LINTER

WORKDIR /app

RUN npm run lint

# implementing multi-stage build.
# we will only copy the build output from the first stage
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app

#Copying /app/dist folder from BUILD_IMAGE to /app/dist in this stage
# dist is vite directory for build files
COPY --from=BASE_IMAGE /app/dist /app/dist

COPY package*.json ./
COPY vite.config.js .

RUN npm install --only=production

# Expose port 3000 
EXPOSE 3000

# Command to start the server
CMD [ "npm", "run", "preview" ]
