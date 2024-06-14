
# Stage 1 - the build process
FROM node:21.1 as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.27.0-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
