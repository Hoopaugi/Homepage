# Homepage

## Development

Install dependencies

    npm run install

Build project

    npm run build

Run in development mode

    npm run start:dev

Run in production mode

    npm run start

## Docker

Run development environment

    docker compose -f docker-compose.dev.yml up

Access traefik dashboard by navigating to http://localhost:8080

Run production environment

    docker compose up -d