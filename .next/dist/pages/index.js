'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _store = require('../ethereum/store');

var _store2 = _interopRequireDefault(_store);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ipfs = require('../ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _routes = require('../routes');

var _ipfsHttpClient = require('ipfs-http-client');

var _ipfsHttpClient2 = _interopRequireDefault(_ipfsHttpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\index.js?entry';


var StoreIndex = function (_Component) {
  (0, _inherits3.default)(StoreIndex, _Component);

  (0, _createClass3.default)(StoreIndex, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, account;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                account = accounts[0];
                return _context.abrupt('return', { account: account });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function StoreIndex(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, StoreIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StoreIndex.__proto__ || (0, _getPrototypeOf2.default)(StoreIndex)).call(this, props));

    _this.onChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ password: event.target.value });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleOpen = function () {
      return _this.setState({ modalOpen: true });
    };

    _this.handleClose = function () {
      return _this.setState({ modalOpen: false });
    };

    _this.onClick = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var password;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                password = _this.state.password;

                if (password == "admin") {
                  _routes.Router.pushRoute('/verifydocs');
                }

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    var accounts = _web2.default.eth.getAccounts();
    var account = _this.props.account;

    _this.state = {
      buffer: null,
      ipfsHash: '',
      message: '',
      account: account,
      modalOpen: false,
      password: ''
    };

    return _this;
  }

  (0, _createClass3.default)(StoreIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Modal, {

        open: this.state.modalOpen,
        onClose: this.handleClose,
        basic: true,
        size: 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { icon: 'hand paper', content: 'Restricted Entry!', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'This is a restricted entry. Please provide secret key to login.')), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { type: 'password', onChange: this.onChange, placeholder: 'Enter secret key', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.onClick, inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'checkmark', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), ' Enter'))), _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, relaxed: 'very', stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://cdn.dribbble.com/users/892646/screenshots/2386410/open-uri20151203-3-1m57864', size: 'large', rounded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement(_routes.Link, { route: '/index1', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, ' ', _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', content: 'User Login', icon: 'user', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Column, { verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://cdn.dribbble.com/users/1925079/screenshots/5510101/manage-2.gif', size: 'large', rounded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', onClick: this.handleOpen, content: 'Admin Login', icon: 'user secret', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }))), _react2.default.createElement(_semanticUiReact.Divider, { vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'Or'))));
    }
  }]);

  return StoreIndex;
}(_react.Component);

exports.default = StoreIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50Iiwid2ViMyIsImVzdG9yZSIsIkNhcmQiLCJJY29uIiwiSGVhZGVyIiwiTW9kYWwiLCJCdXR0b24iLCJJbnB1dCIsIkZvcm0iLCJEaXZpZGVyIiwiR3JpZCIsIkltYWdlIiwiUGxhY2Vob2xkZXIiLCJTZWdtZW50IiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiaXBmcyIsImF4aW9zIiwicG9zdCIsIlJvdXRlciIsIkxpbmsiLCJpcGZzQ2xpZW50IiwiU3RvcmVJbmRleCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhY2NvdW50IiwicHJvcHMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJwYXNzd29yZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlT3BlbiIsIm1vZGFsT3BlbiIsImhhbmRsZUNsb3NlIiwib25DbGljayIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJwdXNoUm91dGUiLCJidWZmZXIiLCJpcGZzSGFzaCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVzs7OztBQUMzQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTyxBQUFRLEFBQU8sQUFBTSxBQUFTLEFBQU0sQUFBTyxBQUFhLEFBQVE7O0FBQ3BHLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFZOztBQUc3QixBQUFPOzs7Ozs7Ozs7SSxBQU1EOzs7Ozs7Ozs7Ozs7O3VCQUtxQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUExQjtBLG9DQUNBO0EsMEJBQVUsUyxBQUFBLEFBQVM7aURBQ2xCLEVBQUMsU0FBRCxBOzs7Ozs7Ozs7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