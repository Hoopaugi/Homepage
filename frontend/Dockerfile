# Build

FROM node:18.12.1-buster-slim AS builder

WORKDIR /app

COPY app/package.json app/package-lock.json ./

COPY app .

RUN npm ci

RUN npm run build

# Prod

FROM nginx:1.23.2-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]