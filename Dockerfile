FROM node:12-alpine
WORKDIR /code
COPY package.json /code/package.json
RUN npm install --production
COPY . /code
CMD ["node", "dinosaur-client/src/index.js"]