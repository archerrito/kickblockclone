webpackHotUpdate(6,{

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(730);

var _Layout = __webpack_require__(1164);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(988);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(989);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/supremeoverlord/Desktop/kickstart-blockchain-clone/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            //piece of state that will record input value
            minimumContribution: '',
            errorMessage: '',
            loading: false

            //don't have to do complicated binding
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                //prevents browser from calling function body
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    //metamask will handle gas
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:

                                _this.setState({ loading: false });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Create a Campaign!'), _react2.default.createElement(_semanticUiReact.Form, {
                onSubmit: this.onSubmit
                //error empty, presumed falsy, won't appear
                //!! turns double opposite value to handle console 
                //string requirement error message
                , error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution
                //typing triggers function, reset state value
                //event object contains new value
                , onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7OzBOQUVGLEE7QUFFSTtpQ0FGSSxBQUVpQixBQUNyQjswQkFISSxBQUdVLEFBQ2Q7cUJBQVMsQUFHYjs7QSxBQVBRO0FBQUEsQUFDSixpQixBQU9KO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtBQUNBO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FKeEIsQUFJUCxBQUFjLEFBQStCOztnREFKdEM7Z0RBQUE7dUNBT29CLGNBQUEsQUFBSyxJQVB6QixBQU9vQixBQUFTOztpQ0FBMUI7QUFQSCxvREFBQTtnREFBQTt5REFRRyxBQUFRLFFBQVIsQUFDRCxlQUFlLE1BQUEsQUFBSyxNQURuQixBQUN5QixxQkFEekIsQUFFRDtBQUVHOzBDQUFNLFNBWlgsQUFRRyxBQUVJLEFBRUksQUFBUztBQUZiLEFBQ0YsaUNBSEY7O2lDQVJIO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWVIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZjNCLEFBZUgsQUFBYyxBQUFvQjs7aUNBR3RDOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQWxCVCxBQWtCUCxBQUFjLEFBQVc7O2lDQWxCbEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FzQkY7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUVBLHVDQUFBLEFBQUM7MEJBQ2EsS0FBSyxBQUNmO0FBQ0E7QUFDQTtBQUpKO0FBQ0ksa0JBSUEsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BTGxCLEFBS3dCOzhCQUx4QjtnQ0FBQSxBQU1JO0FBTko7K0JBTUssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EseUNBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFBTSxBQUNsQjtBQUNBO0FBTEo7QUFDSSxrQkFLQSxVQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURyQyxBQUNOLEFBQWMsQUFBb0M7QUFQMUQ7OEJBQUE7Z0NBUkosQUFNSSxBQUVBLEFBU0E7QUFUQTtpQ0FTQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQWpCSixBQWlCSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUF0QlIsQUFDSSxBQUdBLEFBa0JJLEFBSVg7Ozs7O0FBM0RxQixBLEFBOEQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N1cHJlbWVvdmVybG9yZC9EZXNrdG9wL2tpY2tzdGFydC1ibG9ja2NoYWluLWNsb25lIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/supremeoverlord/Desktop/kickstart-blockchain-clone/pages/campaigns/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/supremeoverlord/Desktop/kickstart-blockchain-clone/pages/campaigns/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43OGY5YWU3ZjVjY2I3NGNmZmQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9hZDZkMjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5cbmNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICAvL3BpZWNlIG9mIHN0YXRlIHRoYXQgd2lsbCByZWNvcmQgaW5wdXQgdmFsdWVcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogJycsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuXG4gICAgLy9kb24ndCBoYXZlIHRvIGRvIGNvbXBsaWNhdGVkIGJpbmRpbmdcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAvL3ByZXZlbnRzIGJyb3dzZXIgZnJvbSBjYWxsaW5nIGZ1bmN0aW9uIGJvZHlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcbiAgICAgICAgICAgICAgICAuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxuICAgICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZXRhbWFzayB3aWxsIGhhbmRsZSBnYXNcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcblxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgzPkNyZWF0ZSBhIENhbXBhaWduITwvaDM+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBcbiAgICAgICAgICAgICAgICAvL2Vycm9yIGVtcHR5LCBwcmVzdW1lZCBmYWxzeSwgd29uJ3QgYXBwZWFyXG4gICAgICAgICAgICAgICAgLy8hISB0dXJucyBkb3VibGUgb3Bwb3NpdGUgdmFsdWUgdG8gaGFuZGxlIGNvbnNvbGUgXG4gICAgICAgICAgICAgICAgLy9zdHJpbmcgcmVxdWlyZW1lbnQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIiBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLy90eXBpbmcgdHJpZ2dlcnMgZnVuY3Rpb24sIHJlc2V0IHN0YXRlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vZXZlbnQgb2JqZWN0IGNvbnRhaW5zIG5ldyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWluaW11bUNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBUEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBQUE7QUFRQTtBQUlBO0FBQUE7QUFEQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQW5CQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFKQTtBQUNBO0FBREE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUxBO0FBQ0E7QUFNQTtBQVBBO0FBQUE7QUFTQTtBQVRBO0FBU0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==