'use strict';

//define our different routes
//returns funciton, immediately invoked
var routes = require('next-routes')();

//colon represents wildcard variable
//second argument is component
routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
// //for routes with custom tokes
// routes.add('...', '...');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7QUFDQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzJCLEFBRDNCLGlCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQzs7QUFJQSxPQUFPLEFBQVAsVUFBaUIsQUFBakI7QUFDQTtBQUNBIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3VwcmVtZW92ZXJsb3JkL0Rlc2t0b3Ava2lja3N0YXJ0LWJsb2NrY2hhaW4tY2xvbmUifQ==