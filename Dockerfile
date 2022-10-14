# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add app


# install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

# start app
CMD ["npm", "start"]
