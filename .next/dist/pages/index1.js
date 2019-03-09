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
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, relaxed: 'very', stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('img', { src: 'https://cdn.dribbble.com/users/789033/screenshots/2346688/finalloader1-2.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement('form', { action: '/adddoc', method: 'get', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', content: 'Add Document', icon: 'signup', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('img', { src: 'https://i.gifer.com/QZJI.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement('form', { action: '/mydocs', method: 'post', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('input', { type: 'hidden', name: 'account', value: this.state.account, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'sample', value: '10', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Show Document', icon: 'signup', size: 'big', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))))), _react2.default.createElement(_semanticUiReact.Divider, { vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Or'))));
    }
  }]);

  return StoreIndex;
}(_react.Component);

exports.default = StoreIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleDEuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIndlYjMiLCJlc3RvcmUiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIkRpdmlkZXIiLCJHcmlkIiwiSW1hZ2UiLCJQbGFjZWhvbGRlciIsIlNlZ21lbnQiLCJMYXlvdXQiLCJpcGZzIiwiYXhpb3MiLCJwb3N0IiwiUm91dGVyIiwiTGluayIsImlwZnNDbGllbnQiLCJTdG9yZUluZGV4IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJwcm9wcyIsInN0YXRlIiwiYnVmZmVyIiwiaXBmc0hhc2giLCJtZXNzYWdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUyxBQUFXOzs7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVMsQUFBTSxBQUFTLEFBQU0sQUFBTyxBQUFhOztBQUNqRSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBWTs7QUFFN0IsQUFBTzs7Ozs7Ozs7O0ksQUFNRDs7Ozs7Ozs7Ozs7Ozt1QkFPdUIsY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QSxvQ0FDQztBLDBCQUFVLFNBQUEsQSxBQUFTO2lEQUdyQixFQUFDLFNBQUQsQTs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7OztzQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhJQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO2NBQVEsQUFDRixBQUNUO2dCQUZXLEFBRUEsQUFDWDtlQUhXLEFBR0YsQUFDVDtlQUFVLE1BQUEsQUFBSyxNQVBBLEFBR2pCLEFBQWEsQUFJVTtBQUpWLEFBQ1g7O1dBUUg7Ozs7O3dDQUNvQjttQkFDbkI7O2FBQUEsQUFBTyxpQkFBUCxBQUF3QixpRkFBTyxvQkFBQTtzQkFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFBQTtpQ0FBQTt1QkFDUCxjQUFBLEFBQUssSUFERSxBQUNQLEFBQVM7O21CQUExQjtBQUR3QixxQ0FFeEI7QUFGd0IsMEJBRWQsU0FGYyxBQUVkLEFBQVMsQUFDekI7O3dCQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBd0IsQUFDeEI7dUJBQUEsQUFBSyxTQUFTLEVBQUMsU0FKZSxBQUk5QixBQUFjLEFBQVc7O21CQUpLO21CQUFBO2lDQUFBOztBQUFBO3FCQUFBO0FBQS9CLEFBTUQ7Ozs7NkJBS0MsQUFFRTs7NkJBQ0osQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBLFNBQUssT0FBTCxBQUFXO29CQUFYO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBa0Isc0JBQUEsQUFBSyxNQUF2QixBQUE2QixTQUQ3QixBQUNBLEFBRUE7O29CQUFBO3NCQUhBLEFBR0E7QUFBQTtBQUFBLFVBQU07O29CQUFBO3NCQUhOLEFBR007QUFBQTtBQUFBLFVBQU07O29CQUFBO3NCQUhaLEFBR1ksQUFDWjtBQURZO0FBQUEsMEJBQ1osQUFBQywwQ0FBUSxhQUFUO29CQUFBO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxBQUFDLHVDQUFLLFNBQU4sQUFBZSxHQUFHLFNBQWxCLEFBQTBCLFFBQU8sV0FBakM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQztBQUREO0FBQUEsZ0RBQ00sS0FBTCxBQUFTO29CQUFUO3NCQURELEFBQ0MsQUFDQTtBQURBOzBCQUNBLGNBQUEsVUFBTSxRQUFOLEFBQWEsV0FBVSxRQUF2QixBQUE4QjtvQkFBOUI7c0JBQUEsQUFDRjtBQURFO3lCQUNGLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsU0FBdEIsQUFBOEIsZ0JBQWUsTUFBN0MsQUFBa0QsVUFBUyxNQUEzRCxBQUFnRTtvQkFBaEU7c0JBSkQsQUFDRSxBQUVDLEFBQ0YsQUFLQztBQUxEOzRCQUtFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLGVBQWIsQUFBMkI7b0JBQTNCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGdEQUNNLEtBQUwsQUFBUztvQkFBVDtzQkFERCxBQUNDLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFVBQU0sUUFBTixBQUFhLFdBQVUsUUFBdkIsQUFBOEI7b0JBQTlCO3NCQUFBLEFBQ0E7QUFEQTtrREFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEyQixXQUFVLE9BQU8sS0FBQSxBQUFLLE1BQWpELEFBQXVEO29CQUF2RDtzQkFEQSxBQUNBLEFBQ0E7QUFEQTttREFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEyQixVQUFTLE9BQXBDLEFBQTBDO29CQUExQztzQkFGQSxBQUVBLEFBQ0M7QUFERDswQkFDQyxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsaUJBQWdCLE1BQWhDLEFBQXFDLFVBQVMsTUFBOUMsQUFBbUQ7b0JBQW5EO3NCQWhCUixBQUNJLEFBU0UsQUFDQSxBQUVDLEFBR0MsQUFPSjtBQVBJOzhCQU9KLEFBQUMsMENBQVEsVUFBVDtvQkFBQTtzQkFBQTtBQUFBO1NBN0JBLEFBQ0osQUFDQSxBQUlBLEFBdUJJLEFBV0Q7Ozs7O0FBbEZzQixBLEFBc0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleDEuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=