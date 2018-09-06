'use strict';

//define our different routes
//returns funciton, immediately invoked
var routes = require('next-routes')();

//colon represents wildcard variable
//second argument is component
routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
// //for routes with custom tokes
// routes.add('...', '...');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7QUFDQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzJCLEFBRDNCLGlCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQyxtQkFHSyxBQUhMLElBR1MsQUFIVCxnQ0FHeUMsQUFIekMsNkJBSUssQUFKTCxJQUlTLEFBSlQsb0NBSTZDLEFBSjdDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQjtBQUNBO0FBQ0EiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdXByZW1lb3ZlcmxvcmQvRGVza3RvcC9raWNrc3RhcnQtYmxvY2tjaGFpbi1jbG9uZSJ9