'use strict';

//define our different routes
//returns funciton, immediately invoked
var routes = require('next-routes')();

//colon represents wildcard variable
//second argument is component
routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
// //for routes with custom tokes
// routes.add('...', '...');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsSUFBTSxTQUFTLEFBQWY7O0FBRUE7QUFDQTtBQUNBLE9BQ0ssQUFETCxJQUNTLEFBRFQsa0JBQzJCLEFBRDNCLGlCQUVLLEFBRkwsSUFFUyxBQUZULHVCQUVnQyxBQUZoQyxtQkFHSyxBQUhMLElBR1MsQUFIVCxnQ0FHeUMsQUFIekM7O0FBS0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCO0FBQ0E7QUFDQSIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N1cHJlbWVvdmVybG9yZC9EZXNrdG9wL2tpY2tzdGFydC1ibG9ja2NoYWluLWNsb25lIn0=