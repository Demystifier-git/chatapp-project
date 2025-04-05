# Use the latest official Nginx image
FROM nginx:latest

# Copy the custom nginx.conf file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to make the container accessible via HTTP
EXPOSE 80

# Run Nginx in the foreground (as the main process of the container)
CMD ["nginx", "-g", "daemon off;"]
