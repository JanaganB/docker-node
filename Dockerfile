FROM node:12.5.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]
