# Builder
FROM node:latest AS builder

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm ci

RUN npm run build

# Production
FROM node:lts-alpine

ENV NODE_ENV production

RUN apk add dumb-init

USER node

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

COPY --chown=node:node --from=builder /usr/src/app/build /usr/src/app/build

RUN npm ci --only=production

EXPOSE 5000

CMD ["dumb-init", "node", "build/server.js"]