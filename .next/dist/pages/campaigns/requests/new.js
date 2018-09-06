'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/supremeoverlord/Desktop/kickstart-blockchain-clone/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 9:
                                _context.next = 13;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](3);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Create a new request')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsImNhbXBhaWduIiwiUmVxdWVzdE5ldyIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBUzs7QUFDaEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZLEFBQ25CLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O3dOQUNGLEE7bUJBQVEsQUFDRyxBQUNQO3lCQUZJLEFBRVMsQUFDYjt1QkFISSxBQUdPLEE7QUFIUCxBQUNKLGlCQVdKLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRUE7O0FBSEMsMkNBR1Usd0JBQVMsTUFBQSxBQUFLLE1BSHhCLEFBR1UsQUFBb0I7OENBQ0ssTUFKbkMsQUFJd0MsT0FKeEMsQUFJQywwQkFKRCxBQUlDLGFBSkQsQUFJYyxvQkFKZCxBQUljLE9BSmQsQUFJcUIsd0JBSnJCLEFBSXFCO2dEQUpyQjtnREFBQTt1Q0FTb0IsY0FBQSxBQUFLLElBVHpCLEFBU29CLEFBQVM7O2lDQUExQjtBQVRILG9EQUFBO2dEQUFBO3VDQVVHLFNBQUEsQUFBUyxRQUFULEFBQWlCLGNBQWpCLEFBQ0YsYUFDQSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FGZixBQUVGLEFBQXdCLFVBRnRCLEFBR0YsV0FIRSxBQUtMLEtBQUssRUFBRSxNQUFNLFNBZlgsQUFVRyxBQUtBLEFBQVEsQUFBUzs7aUNBZnBCO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQUFBOztpQ0FBQTtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXFCSjt5QkFDUDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EscUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWMsQUFBNEI7QUFGakU7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUYzRDs7OEJBQUE7Z0NBVlIsQUFRSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFjLEFBQTBCO0FBRi9EOzs4QkFBQTtnQ0FqQlIsQUFlSSxBQUVJLEFBTUo7QUFOSTtBQUNJLGlDQUtSLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBMUJaLEFBQ0ksQUFFSSxBQXVCSSxBQUliOzs7OzttSEExRDhCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNQUFsQixBO2tFQUVELEVBQUUsU0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVlUsQSxBQW9FekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdXByZW1lb3ZlcmxvcmQvRGVza3RvcC9raWNrc3RhcnQtYmxvY2tjaGFpbi1jbG9uZSJ9