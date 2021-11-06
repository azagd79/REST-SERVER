const express = require('express');

const dotenv = require('dotenv').config({path: './env/.env'});
const app = express();

const Server = require('./models/server');


const server = new Server();

server.middleware();
server.routes();

server.port();
