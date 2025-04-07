# Use the official Nginx image
FROM nginx:latest

# Create a new directory for our static files
RUN mkdir -p /usr/share/nginx/html

# Copy index.html into the container
COPY index.html /usr/share/nginx/html/

# Copy index.css into the container
COPY index.css /usr/share/nginx/html/

# Copy index.js into the container
COPY index.js /usr/share/nginx/html/

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration into the container
COPY nginx.conf /etc/nginx/conf.d/

# Expose the Nginx port
EXPOSE 8080

# Run the Nginx command to start the server
CMD ["nginx", "-g", "daemon off;"]

