# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add app
COPY . ./

# install app dependencies
COPY package.json ./

RUN npm install --only=prod

ENV NODE_ENV production

EXPOSE 3001

COPY . .

# start app
CMD ["npm", "run","start"]