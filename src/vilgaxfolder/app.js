const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  // Central error handler so students can see a realistic pattern
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;

