# Build Stage
FROM node:18.19.0 as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy all application files
COPY . .

# Build the Angular app for production
RUN ng build --configuration=production

# Nginx Stage
FROM nginx:latest

# Copy the build output from the build stage to Nginx's default HTML directory
# Ensure the path matches the actual output directory (dist/portfolio)
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

# Expose port 80 (default port for Nginx)
EXPOSE 80

# Start Nginx (it is the default entry point in the nginx image)
CMD ["nginx", "-g", "daemon off;"]
