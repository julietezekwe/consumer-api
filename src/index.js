import express from 'express';
// import { listModules } from 'awilix';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const createApp = () => {
  const app = express();
  // app.get('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');
  // Enable Cross Origin Resource Sharing to all origins
  app.use(cors());
  // Log requests to the console.
  app.use(morgan('dev'));
  // Parse incoming requests data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Well, will you help build this route? 🤷🏼‍♂️',
    });
    next();
  });
  return app;
};
export default createApp;
