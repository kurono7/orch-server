WORKDIR /app

# add app


# install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

COPY . .

# start app
CMD ["npm","start"]
