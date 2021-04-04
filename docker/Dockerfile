# Use the base image with Node.js 12.16.3
FROM node:12.16.3

# Copy the current directory into the Docker image
COPY . /ubahn-skill-processor-trigger

# Set working directory for future use
WORKDIR /ubahn-skill-processor-trigger

# Install the dependencies from package.json
RUN npm install
CMD npm start
