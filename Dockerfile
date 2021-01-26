FROM node:latest
RUN apt update
MAINTAINER HACKATON DIGITAL HOUSE
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000
