//define our different routes
//returns funciton, immediately invoked
const routes = require('next-routes')();

//colon represents wildcard variable
//second argument is component
routes
    .add('/campaigns/new', 'campaigns/new')
    .add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
// //for routes with custom tokes
// routes.add('...', '...');