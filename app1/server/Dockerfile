FROM php:8.1-apache
WORKDIR /var/www/html
COPY . /var/www/html
RUN a2enmod rewrite
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]