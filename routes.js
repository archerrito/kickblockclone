//define our different routes
//returns funciton, immediately invoked
const routes = require('next-routes')();

//colon represents wildcard variable
//second argument is component
routes
    .add('/campaigns/new', 'campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
// //for routes with custom tokes
// routes.add('...', '...');