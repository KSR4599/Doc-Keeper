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

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\index1.js?entry';


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
    (0, _classCallCheck3.default)(this, StoreIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StoreIndex.__proto__ || (0, _getPrototypeOf2.default)(StoreIndex)).call(this, props));

    _this.state = {
      buffer: null,
      ipfsHash: '',
      message: '',
      account: _this.props.account
    };

    return _this;
  }

  (0, _createClass3.default)(StoreIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts, account;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                account = accounts[0];

                console.log("Account :", account);
                _this2.setState({ account: account });

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      })));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Your Account:', this.state.account, ' '), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 3, divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('img', { src: 'https://cdn.dribbble.com/users/789033/screenshots/2346688/finalloader1-2.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement('form', { action: '/adddoc', method: 'get', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), '  ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', content: 'Add Document', icon: 'plus circle', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('img', { src: 'https://i.gifer.com/QZJI.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement('form', { action: '/mydocs', method: 'post', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('input', { type: 'hidden', name: 'account', value: this.state.account, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'sample', value: '10', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), '  ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { content: 'My Documents', icon: 'address card outline', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('img', { src: 'https://cdn.dribbble.com/users/391380/screenshots/5431062/icon.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement('form', { action: '/mydocs', method: 'post', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('input', { type: 'hidden', name: 'sample', value: '10', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { icon: _react2.default.createElement(_semanticUiReact.Icon, { name: 'address card', inverted: true, circular: true, link: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }), name: 'account', placeholder: 'Enter the address', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), '  ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Check the status', icon: 'tasks', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))))))));
    }
  }]);

  return StoreIndex;
}(_react.Component);

exports.default = StoreIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleDEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIndlYjMiLCJlc3RvcmUiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIkRpdmlkZXIiLCJHcmlkIiwiSW1hZ2UiLCJQbGFjZWhvbGRlciIsIlNlZ21lbnQiLCJJbnB1dCIsIkljb24iLCJMYXlvdXQiLCJpcGZzIiwiYXhpb3MiLCJwb3N0IiwiUm91dGVyIiwiTGluayIsImlwZnNDbGllbnQiLCJTdG9yZUluZGV4IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJwcm9wcyIsInN0YXRlIiwiYnVmZmVyIiwiaXBmc0hhc2giLCJtZXNzYWdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUyxBQUFXOzs7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVMsQUFBTSxBQUFTLEFBQU0sQUFBTyxBQUFhLEFBQVMsQUFBTzs7QUFDakYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQVk7O0FBRTdCLEFBQU87Ozs7Ozs7OztJQU1ELEE7Ozs7Ozs7Ozs7Ozs7dUJBT3VCLGNBQUEsQUFBSyxJQUFJLEEsQUFBVDs7bUJBQWpCO0Esb0NBQ0M7QSwwQkFBVSxTLEFBQUEsQUFBUztpREFHckIsRUFBQyxTLEFBQUQ7Ozs7Ozs7Ozs7Ozs7OztBQUlYOzs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSztjQUFRLEFBQ0YsQUFDVDtnQkFGVyxBQUVBLEFBQ1g7ZUFIVyxBQUdGLEFBQ1Q7ZUFBVSxNQUFBLEFBQUss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ckIsQUFBMkIsVUFBUyxPQUFwQyxBQUEwQztvQkFBMUM7c0JBREEsQUFDQSxBQUNBO0FBREE7OztvQkFDQTtzQkFGQSxBQUVBLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsd0NBQU0sc0JBQU0sQUFBQyx1Q0FBSyxNQUFOLEFBQVcsZ0JBQWUsVUFBMUIsTUFBbUMsVUFBbkMsTUFBNEMsTUFBNUM7c0JBQUE7d0JBQWIsQUFBYTtBQUFBO1NBQUEsR0FBcUQsTUFBbEUsQUFBdUUsV0FBVSxhQUFqRixBQUE2RjtvQkFBN0Y7c0JBSEEsQUFHQSxBQUNBO0FBREE7OztvQkFDQTtzQkFKQSxBQUlBO0FBQUE7QUFBQSxVQUFXOztvQkFBQTtzQkFKWCxBQUlXLEFBQ1Y7QUFEVTtBQUFBLDBCQUNWLEFBQUMseUNBQU8sU0FBUixBQUFnQixvQkFBbUIsTUFBbkMsQUFBd0MsU0FBUSxNQUFoRCxBQUFxRDtvQkFBckQ7c0JBekNKLEFBQ0osQUFDQSxBQUlBLEFBQ0EsQUFDQSxBQTBCTSxBQUVDLEFBS0MsQUFpQkw7QUFqQks7Ozs7OztBQW5GaUIsQSxBQXdHekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXgxLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tzcmVkL0Rvd25sb2Fkcy9aelovRG9jdW1lbnQtS2VlcGVyLW1hc3RlciJ9