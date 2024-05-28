FROM node:21

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD npx wait-port sub_db:3306 && \
npx wait-port rabbit:5672 && \  
npm run start
  