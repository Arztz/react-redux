FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

# RUN yarn global add @types/styled-components
RUN yarn install --production=false


COPY . .
EXPOSE 3000
RUN yarn build


CMD ["node", "server.js"]
