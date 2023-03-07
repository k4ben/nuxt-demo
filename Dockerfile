FROM node:18

WORKDIR /data

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD node .output/server/index.mjs
