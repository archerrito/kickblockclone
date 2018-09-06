'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    //create instance of campaign and deploy it
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface),
    //address passed into function, will depend 
    //on campaign data for page that user is on
    address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBR0E7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtBQUNBO1dBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0gsS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFERyxBQUVIO0FBQ0E7QUFDQTtBQUpHLEFBQVAsQUFNSDtBQVJEIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdXByZW1lb3ZlcmxvcmQvRGVza3RvcC9raWNrc3RhcnQtYmxvY2tjaGFpbi1jbG9uZSJ9