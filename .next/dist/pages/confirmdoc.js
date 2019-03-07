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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _store = require('../ethereum/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\confirmdoc.js?entry';


var Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  (0, _createClass3.default)(Test, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var _ref$query = _ref.query,
            name = _ref$query.name,
            index = _ref$query.index,
            imagehash = _ref$query.imagehash;
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
                return _context.abrupt('return', { name: name, index: index, imagehash: imagehash, account: account });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Test(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Test);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

    _this.onClick = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var dlink, accounts, docx;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({ message: 'We adding your document. Please wait.' });
                console.log("On Click Called!");
                console.log("name", _this.state.name);
                console.log("imagehash", _this.state.imagehash);

                dlink = 'https://ipfs.io/ipfs/' + _this.state.imagehash;
                _context2.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context2.sent;
                _context2.next = 11;
                return _store2.default.methods.addDocumentToStore(_this.state.name, _this.state.imagehash, _this.state.index).send({
                  from: accounts[0]
                });

              case 11:
                docx = _context2.sent;

                _store2.default.methods.getDoc(_this.props.index).call().then(function (f) {
                  console.log("Doc is", f);
                });
                _this.setState({ message: 'Done!' });
              //Router.pushRoute('/');

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    console.log("In Contructor");

    _this.state = {
      name: _this.props.name,
      index: _this.props.index,
      imagehash: _this.props.imagehash,
      imageLink: 'https://ipfs.io/ipfs/' + _this.props.imagehash,
      message: 'If Everything is Correct. Click the conform button!'
    };

    console.log("name", _this.state.name);
    _this.onClick = _this.onClick.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Document Name : ', this.props.name), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Your Document :', _react2.default.createElement('a', { href: this.state.imageLink, target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Click here')), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Your Account Address : ', this.props.account), _react2.default.createElement('form', { onSubmit: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: true, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Confirm'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'angle double right', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })))), _react2.default.createElement(_semanticUiReact.Segment, { color: 'teal', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, '  ', _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.state.message)));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb25maXJtZG9jLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJJbWFnZSIsIlNlZ21lbnQiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsImVzdG9yZSIsIlRlc3QiLCJxdWVyeSIsIm5hbWUiLCJpbmRleCIsImltYWdlaGFzaCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhY2NvdW50IiwicHJvcHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImRsaW5rIiwibWV0aG9kcyIsImFkZERvY3VtZW50VG9TdG9yZSIsInNlbmQiLCJmcm9tIiwiZG9jeCIsImdldERvYyIsImNhbGwiLCJ0aGVuIiwiZiIsImltYWdlTGluayIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU0sQUFBTzs7QUFDcEMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7OEJBRThCLEE7WSxBQUFTLGtCQUFBLEE7WSxBQUFNLG1CLEFBQUE7WUFBTyxBLHVCQUFBLEE7Ozs7Ozs7dUJBRzNCLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0Esb0NBQ0E7QSwwQkFBVSxTLEFBQUEsQUFBUztpREFDbEIsRUFBRSxNQUFGLE1BQVMsT0FBVCxPQUFpQixXQUFqQixXQUE0QixTLEFBQTVCOzs7Ozs7Ozs7Ozs7Ozs7QUFHZjs7O2dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tJQUFBLEFBQ1Q7O1VBRFMsQUFrQmpCLHNCQWxCaUI7MkZBa0JQLGtCQUFBLEFBQU8sT0FBUDs2QkFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDUjtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVcsQUFDdkI7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBQSxBQUFRLElBQVIsQUFBWSxRQUFPLE1BQUEsQUFBSyxNQUF4QixBQUE4QixBQUM5Qjt3QkFBQSxBQUFRLElBQVIsQUFBWSxhQUFhLE1BQUEsQUFBSyxNQUE5QixBQUFvQyxBQUUvQjs7QUFQQyx3QkFPTywwQkFBd0IsTUFBQSxBQUFLLE1BUHBDLEFBTzBDO2lDQVAxQzt1QkFRZSxjQUFBLEFBQUssSUFScEIsQUFRZSxBQUFTOzttQkFBMUI7QUFSRSxxQ0FBQTtpQ0FBQTt1Q0FVUyxBQUFPLFFBQVAsQUFBZSxtQkFDN0IsTUFBQSxBQUFLLE1BRFMsQUFDSCxNQUNYLE1BQUEsQUFBSyxNQUZTLEFBRUgsV0FDWCxNQUFBLEFBQUssTUFIUyxBQUdILE9BSEcsQUFJZjt3QkFDTyxTQWZELEFBVVMsQUFJVixBQUNFLEFBQVM7QUFEWCxBQUNMLGlCQUxlOzttQkFBYjtBQVZJLGlDQWtCUjs7Z0NBQUEsQUFBTyxRQUFQLEFBQWUsT0FBTyxNQUFBLEFBQUssTUFBM0IsQUFBaUMsT0FBakMsQUFBd0MsT0FBeEMsQUFBK0MsS0FBSyxVQUFBLEFBQVMsR0FBRSxBQUM3RDswQkFBQSxBQUFRLElBQVIsQUFBWSxVQUFaLEFBQXNCLEFBQ3ZCO0FBRkQsQUFHQTtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVyxBQUN6QjtBQXRCUTs7bUJBQUE7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QUFsQk87OzRCQUFBO2lDQUFBO0FBQUE7QUFFakI7O1lBQUEsQUFBUSxJQUFSLEFBQVksQUFFVjs7VUFBQSxBQUFLO1lBQ00sTUFBQSxBQUFLLE1BREgsQUFDUyxBQUNsQjthQUFRLE1BQUEsQUFBSyxNQUZKLEFBRVUsQUFDbkI7aUJBQVcsTUFBQSxBQUFLLE1BSFAsQUFHYSxBQUN0QjtpQkFBWSwwQkFBd0IsTUFBQSxBQUFLLE1BSmhDLEFBSXNDLEFBQy9DO2VBTEosQUFBYSxBQUtBLEFBR1g7QUFSVyxBQUNUOztZQU9GLEFBQVEsSUFBUixBQUFZLFFBQVEsTUFBQSxBQUFLLE1BQXpCLEFBQStCLEFBQ2pDO1VBQUEsQUFBSyxVQUFVLE1BQUEsQUFBSyxRQUFMLEFBQWEsS0FiYixBQWFmOztXQUVEOzs7Ozs2QkE4QkcsQUFDRTs2QkFDSixBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFxQix5QkFBQSxBQUFLLE1BRDFCLEFBQ0EsQUFBZ0MsQUFDaEMsdUJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW1CLG1DQUFBLGNBQUEsT0FBRyxNQUFPLEtBQUEsQUFBSyxNQUFmLEFBQXFCLFdBQVcsUUFBaEMsQUFBdUM7b0JBQXZDO3NCQUFBO0FBQUE7U0FGbkIsQUFFQSxBQUFtQixBQUNuQixnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBNEIsZ0NBQUEsQUFBSyxNQUhqQyxBQUdBLEFBQXVDLEFBRXZDLDBCQUFBLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw0QkFBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBVEosQUFLQSxBQUNBLEFBRUUsQUFDRSxBQUtKO0FBTEk7NkJBS0osQUFBQywwQ0FBUSxPQUFULEFBQWU7b0JBQWY7c0JBQUE7QUFBQTtTQUF3QixzQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFmOUIsQUFDSixBQWNBLEFBQXdCLEFBQWdCLEFBS3JDOzs7OztBQTVFWSxBLEFBZ0ZmOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbmZpcm1kb2MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=