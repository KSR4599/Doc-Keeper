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

                console.log("Your Account is :", account);
                return _context.abrupt('return', { name: name, index: index, imagehash: imagehash, account: account });

              case 6:
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
                _this.setState({ message: 'We are adding your document. Please wait.' });
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
                _routes.Router.pushRoute('/index1');

              case 15:
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
      message: 'If Everything is Correct. Click the confirm button!'
    };

    _this.onClick = _this.onClick.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Document Name :'), '  ', _react2.default.createElement(_semanticUiReact.Step.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Step, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_semanticUiReact.Step.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Step.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.props.name), _react2.default.createElement(_semanticUiReact.Step.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Will be approved by the respective authority soon')))), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Your Document :', _react2.default.createElement('a', { href: this.state.imageLink, target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://thumbs.gfycat.com/ColorlessGrouchyBear-size_restricted.gif', size: 'small', rounded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement('form', { onSubmit: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: true, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Confirm'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'check square outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })))), _react2.default.createElement(_semanticUiReact.Segment, { color: 'teal', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, '  ', _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, this.state.message))));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb25maXJtZG9jLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJJbWFnZSIsIlNlZ21lbnQiLCJTdGVwIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJlc3RvcmUiLCJUZXN0IiwicXVlcnkiLCJuYW1lIiwiaW5kZXgiLCJpbWFnZWhhc2giLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJtZXNzYWdlIiwic3RhdGUiLCJkbGluayIsIm1ldGhvZHMiLCJhZGREb2N1bWVudFRvU3RvcmUiLCJzZW5kIiwiZnJvbSIsImRvY3giLCJnZXREb2MiLCJjYWxsIiwidGhlbiIsImYiLCJwdXNoUm91dGUiLCJpbWFnZUxpbmsiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDN0MsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7OEIsQUFFOEI7WSxBQUFTLGtCQUFBLEE7WSxBQUFNLG1CLEFBQUE7WUFBTyxBLHVCQUFBLEE7Ozs7Ozs7dUJBRzNCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0Esb0NBQ0E7QSwwQkFBVSxTQUFBLEEsQUFBUyxBQUN6Qjs7d0JBQUEsQUFBUSxJQUFSLEFBQVkscUJBQVosQUFBaUM7aURBQzFCLEVBQUUsTUFBRixNQUFTLE9BQVQsT0FBaUIsV0FBakIsV0FBNEIsUyxBQUE1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBR2Y7OztnQkFBQSxB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QUFRLFNBQTlGO29CQUFBO3NCQVZuRSxBQVVBLEFBQW1CLEFBQWdELEFBSW5FO0FBSm1FOzRCQUluRSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixNQUFqQixBQUFzQjtvQkFBdEI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsNEJBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQWxCSixBQWNBLEFBQ0EsQUFFRSxBQUNFLEFBS0o7QUFMSTs2QkFLSixBQUFDLDBDQUFRLE9BQVQsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBQXdCLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQXpCOUIsQUFDSixBQUNBLEFBdUJBLEFBQXdCLEFBQWdCLEFBTXJDOzs7OztBQXhGWSxBLEFBNEZmOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbmZpcm1kb2MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=