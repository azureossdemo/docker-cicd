# Dockerfile

# Use a lightweight Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy application files
COPY app.js .

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
