FROM node:15.5.0

WORKDIR /my_app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["node","index.js"]