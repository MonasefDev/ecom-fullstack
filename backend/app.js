const express = require('express');

const productsRoute = require('./routes/productsRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const conditionsRoute = require('./routes/conditionsRoute');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// 3) ROUTES
app.use('/api/v1/products', productsRoute);

app.use('/api/v1/categories', categoriesRoute);

app.use('/api/v1/conditions', conditionsRoute);

// 4) ERROR HANDLING

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

app.use(globalErrorHandler);

module.exports = app;
