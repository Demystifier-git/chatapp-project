# Use PHP 8.0 image with CLI (no Apache or FPM)
FROM php:8.0-cli

# Set working directory in the container
WORKDIR /var/www/html

# Install Nginx
RUN apt-get update && apt-get install -y nginx

# Install PHP extensions if necessary
RUN apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Copy project files into the container
COPY . /var/www/html

# Copy custom Nginx configuration file (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for Nginx
EXPOSE 80

# Run Nginx in the foreground along with PHP (using PHP CLI for scripts)
CMD service nginx start && tail -f /dev/null
