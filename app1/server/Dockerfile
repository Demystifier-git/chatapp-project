FROM php:8.1-apache

# Set working directory
WORKDIR /var/www/html

# Copy application code
COPY . /var/www/html/

# Expose port 80
EXPOSE 80

# Set environment variables
ENV APACHE_DOCUMENT_ROOT=/var/www/html
ENV APACHE_RUN_DIR=/var/run/apache2
ENV APACHE_LOG_DIR=/var/log/apache2
ENV APACHE_PID_FILE=/var/run/apache2/apache2.pid
ENV APACHE_RUN_USER=www-data
ENV APACHE_RUN_GROUP=www-data

# Configure Apache2
RUN a2enmod rewrite
RUN service apache2 restart

# Run command
CMD ["apache2-foreground"]