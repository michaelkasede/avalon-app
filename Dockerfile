FROM node:12.13.0-alpine as build
WORKDIR /app
#copy react app to container
COPY . /app/
#prepare the container for building
RUN npm install --silent
RUN npm install react-scripts@3.2.0 -g --silent
RUN npm run build
#prepare for nginx
FROM nginx:1.16.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 