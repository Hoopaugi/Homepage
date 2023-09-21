# Build production build of the project
FROM node:lts-bookworm-slim AS build 

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm ci

RUN npm run build

# Install production dependencies
FROM node:lts-bookworm-slim AS dependencies

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm ci --only=production

# Production image
FROM node:lts-bookworm-slim

ENV NODE_ENV production
ENV PORT 5000

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init curl

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=dependencies /usr/src/app/node_modules /usr/src/app/node_modules

COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app/dist

HEALTHCHECK CMD curl --fail http://localhost:5000/health || exit 1

CMD ["dumb-init", "node", "dist/index.js"]
