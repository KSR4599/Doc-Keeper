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

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\adddoc.js?entry';


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
      }, _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('br', {
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
      }), _react2.default.createElement(_semanticUiReact.Grid, { columns: 3, divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Add your Aadhar Here :'), _react2.default.createElement(_semanticUiReact.Image, { src: 'https://cms-img.coverfox.com/aadhar-card.jpg', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), '       ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement('form', { method: 'post', action: '/upload', id: 'submit-form', encType: 'multipart/form-data', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('input', { type: 'hidden', name: 'name', value: 'AADHAR CARD', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'index', value: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'owner', value: this.props.account, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement('input', { type: 'file', name: 'doc', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Upload'), _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'Add your Pan Card Here :'), _react2.default.createElement(_semanticUiReact.Image, { src: 'https://5.imimg.com/data5/LJ/DH/MY-54036343/pan-card-agency-500x500.png', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement('form', { method: 'post', action: '/upload', id: 'submit-form', encType: 'multipart/form-data', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('input', { type: 'hidden', name: 'name', value: 'PAN CARD', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'index', value: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'owner', value: this.props.account, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement('input', { type: 'file', name: 'doc', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Upload'), _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Add your Passport Here :'), _react2.default.createElement(_semanticUiReact.Image, { src: 'https://cdn.dribbble.com/users/72473/screenshots/2537705/anim_passport.gif', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('form', { method: 'post', action: '/upload', id: 'submit-form', encType: 'multipart/form-data', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('input', { type: 'hidden', name: 'name', value: 'PASSPORT', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'index', value: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement('input', { type: 'hidden', name: 'owner', value: this.props.account, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement('input', { type: 'file', name: 'doc', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Upload'), _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }))))))))));
    }
  }]);

  return StoreIndex;
}(_react.Component);

exports.default = StoreIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZGRkb2MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIndlYjMiLCJlc3RvcmUiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIkRpdmlkZXIiLCJHcmlkIiwiSW1hZ2UiLCJQbGFjZWhvbGRlciIsIlNlZ21lbnQiLCJJY29uIiwiTGF5b3V0IiwiaXBmcyIsImF4aW9zIiwicG9zdCIsIlJvdXRlciIsIkxpbmsiLCJpcGZzQ2xpZW50IiwiU3RvcmVJbmRleCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsImJ1ZmZlciIsImlwZnNIYXNoIiwibWVzc2FnZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVzs7OztBQUMzQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFTLEFBQU0sQUFBUyxBQUFNLEFBQU8sQUFBYSxBQUFTOztBQUMxRSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBWTs7QUFFN0IsQUFBTzs7Ozs7Ozs7O0ksQUFNRDs7Ozs7Ozs7Ozs7Ozt1QkFPdUIsY0FBQSxBQUFLLElBQUksQSxBQUFUOzttQkFBakI7QSxvQ0FDQztBLDBCQUFVLFMsQUFBQSxBQUFTO2lEQUdyQixFQUFDLFMsQUFBRDs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7OztzQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhJQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO2NBQVEsQUFDRixBQUNUO2dCQUZXLEFBRUEsQUFDWDtlQUhXLEFBR0YsQUFDVDtlQUFVLE1BQUEsQUFBSyxNQVBBLEFBR2pCLEFB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WDtzQkFuQ1IsQUFxQk0sQUFNTixBQUtBLEFBRU0sQUFDRSxBQVNGO0FBVEU7OEJBU0QsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0YsNkNBQUEsQUFBQyx3Q0FBTSxLQUFQLEFBQVcsOEVBQTZFLE1BQXhGLEFBQTZGLFVBQVMsVUFBdEc7b0JBQUE7c0JBRkUsQUFFRixBQUVBO0FBRkE7OztvQkFFQTtzQkFKRSxBQUlGO0FBQUE7QUFBQSxVQUFhOztvQkFBQTtzQkFKWCxBQUlXLEFBQ2pCO0FBRGlCO0FBQUEsMEJBQ2pCLGNBQUEsVUFBTSxRQUFOLEFBQWEsUUFBTyxRQUFwQixBQUEyQixXQUFVLElBQXJDLEFBQXdDLGVBQWMsU0FBdEQsQUFBOEQ7b0JBQTlEO3NCQUFBLEFBQ0E7QUFEQTtrREFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixRQUFPLE9BQWpDLEFBQXVDO29CQUF2QztzQkFEQSxBQUNBLEFBQ0E7QUFEQTttREFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixTQUFRLE9BQWxDLEFBQXdDO29CQUF4QztzQkFGQSxBQUVBLEFBQ0E7QUFEQTttREFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixTQUFRLE9BQU8sS0FBQSxBQUFLLE1BQTlDLEFBQW9EO29CQUFwRDtzQkFIQSxBQUdBLEFBQ0E7QUFEQTttREFDTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QjtvQkFBeEI7c0JBSkEsQUFJQSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxVQUFSLEFBQWlCLFFBQU8sTUFBeEIsQUFBNkI7b0JBQTdCO3NCQUFBLEFBQ007QUFETjt5QkFDTyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBRE4sQUFDTSxBQUNBLDJCQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFoRUosQUFDSixBQUNBLEFBQ0EsQUFHQSxBQUNBLEFBNENNLEFBS04sQUFLQSxBQUVNLEFBQ0UsQUFpQkw7QUFqQks7Ozs7OztBQTFHaUIsQSxBQStIekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYWRkZG9jLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tzcmVkL0Rvd25sb2Fkcy9aelovRG9jdW1lbnQtS2VlcGVyLW1hc3RlciJ9