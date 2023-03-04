const router = require('express').Router();
// API routes
const apiRoutes = require('./api');
// Homepage routes
const homeRoutes = require('./home-routes.js');
// Dashboard Routes
const dashboardRoutes = require('./dashboard-routes.js');

// Define path for server for API routes
router.use('/api', apiRoutes);

// Define path for homepage
router.use('/', homeRoutes);

// Define path for dashboard
router.use('/dashboard', dashboardRoutes);

// Define a catch-all route for any resource that doesn't exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;