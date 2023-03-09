FROM node:18

WORKDIR /data

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

ENV MONGO_URI=mongodb://mongodb

CMD node .output/server/index.mjs
