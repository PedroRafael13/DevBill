FROM node:18-alpine

WORKDIR  /home/app

COPY package.json package-lock.json ./

COPY . ./

RUN npm install

EXPOSE 3333

CMD ["npm", "run", "dev"]