import { errorHandler } from './middleware/errorHandler';
import createError from 'http-errors';
import { port, mongoDBUri } from './utils/config';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

const logger = morgan;
import { indexRouter, userRouter, itemRouter } from './routes/index';

const app = express();

/* eslint-disable no-console */

const PORT = port || '3000';

/**
 * Normalize a port into a number, string, or false.
 */

mongoose.connect(mongoDBUri);
mongoose.connection.on('connected', () => {
  console.log(`Successfully connected to MongoDB: ${mongoDBUri}`);
});
mongoose.set('strictQuery', true);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/items', itemRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port: ${PORT}`);
});
