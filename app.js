require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const path = require('path');

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const indexRouter = require('./src/routers/index.router');
const userRouter = require('./src/routers/user.router');
const wayRouter = require('./src/routers/way.router');

const profileRouter = require('./src/routers/profile.router');
const descriptionRouter = require('./src/routers/description.router');

// const orderRouter = require('./src/routers/order');

const sessionConfig = {
  store: new FileStore(), // добавить после установки session-file-store
  secret: process.env.SECRET_KEY_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(expressSession(sessionConfig));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.use('/way', wayRouter);


app.use('/profile', profileRouter);
app.use('/description', descriptionRouter);

// app.use('/orders', orderRouter);

// app.get('/*', (req, res) => {
//     res.redirect('/');
//   });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
