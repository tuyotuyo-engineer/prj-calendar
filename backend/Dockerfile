FROM node:18.17.1

WORKDIR /backend

COPY package.json package-lock.json ./

COPY . .

RUN npm install -g @nestjs/cli

RUN npm install

RUN npm run build

CMD ["npm", "run", "start:dev"]
