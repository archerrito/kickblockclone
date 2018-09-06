'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///becomes prcofingured instance of campaignfactory
var instance = new _web2.default.eth.Contract(
//first argument is contract abi, in CampaignFactory
JSON.parse(_CampaignFactory2.default.interface),
//and address we deployed to
'0x21A5f0464baB2E2b510e1C9694f7fe9FE15E0ECe');
//import compiled contract
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQXFCOzs7Ozs7QUFINUI7QUFLQSxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhO0FBQzFCO0FBQ0EsS0FBQSxBQUFLLE1BQU0sMEJBRkUsQUFFYixBQUEyQjtBQUMzQjtBQUhKLEFBQWlCLEFBSWIsQUFHSjtBQVZBO2tCQVVBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3VwcmVtZW92ZXJsb3JkL0Rlc2t0b3Ava2lja3N0YXJ0LWJsb2NrY2hhaW4tY2xvbmUifQ==