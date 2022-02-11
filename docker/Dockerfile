# Use the base image with Node.js 12.16.3
FROM node:12.22.9

# Copy the current directory into the Docker image
COPY . /u-bahn-backendjob

# Set working directory for future use
WORKDIR /u-bahn-backendjob

# Install the dependencies from package.json
RUN npm install
CMD npm start
