FROM node:21

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD npx wait-port report_db:3306 && \
  npm run start