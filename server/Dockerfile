FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install
CMD ["node", "app.js"]