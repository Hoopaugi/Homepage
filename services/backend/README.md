# Homepage Backend

Backend for the homepage

## Before pushing changes:

Lint code

    npm run lint

Run tests

    npm run test

Build production docker image

## Docker

Build production docker image

    docker build -f prod.Dockerfile -t homepage-backend-prod .

Run production image

    docker run -p 5000:5000 homepage-backend-prod
