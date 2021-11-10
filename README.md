#### parallel

Real-Time jobs scheduler (for craft businesses)

### dev mode

## start server

- cd server
- npm start

- npm run nodemon

## start web socket server

- cd webSocketServer
- npm start

## start client (electron app)

-npm start

### project structure

server
|_ api (model)
| |_ job (contains all the endpoints that deal with a job/jobs)
|
|_ db_connect (contains the database connection handler)
|
|_ index (contains the express server setup. Here are called the routes for the endpoints)
