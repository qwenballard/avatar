FROM node:16-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3001
CMD ["yarn", "dev"]