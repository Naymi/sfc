# Server

## First

- copy .env.example > .env
- copy .env.docker-db.example > .env.docker-db if use docker
- recommend installing docker and docker-compose and using them
- change env file for youre db access if it's necessary

## env param description

| env params  | description      |
| ----------- | ---------------- |
| DB_HOST     | db url           |
| DB_DATABASE | db name          |
| DB_USERNAME | db user name     |
| DB_PASSWORD | db user password |
| APP_SECRET  | secret for jwt   |
| APP_PORT    | port listen app  |

## Docker

### dev

run dev.sh or run the command from it file

### prod

run start.sh or run the command from it file

## Without docker

run yarn for install dependencies
change env file for youre db access

### dev

run yarn start
dev server listened in 3000 port

### prod

run yarn build and serve files in build directory
