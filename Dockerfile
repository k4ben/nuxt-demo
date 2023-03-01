FROM node:18

WORKDIR /data

COPY package.json .

RUN yarn install

COPY . .

CMD yarn start