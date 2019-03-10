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

var _store = require('../ethereum/store');

var _store2 = _interopRequireDefault(_store);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\verify.js?entry';


var Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  (0, _createClass3.default)(Test, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var _ref$query = _ref.query,
            ipfs = _ref$query.ipfs,
            ids = _ref$query.ids;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', { ipfs: ipfs, ids: ids });

              case 1:
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

    _this.onChange = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ id: event.target.value });

              case 1:
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

    _this.onClick = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var accounts, account, docx;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context3.sent;
                account = accounts[0];
                _context3.next = 7;
                return _store2.default.methods.verifyDoc(_this.state.id).send({
                  from: account
                });

              case 7:
                docx = _context3.sent;

                console.log("Document verified Succesfully! :", docx);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    console.log("In Contructor");

    _this.state = {
      id: '',
      message: 'If Everything is Correct. Click the confirm button!'
    };

    _this.onClick = _this.onClick.bind(_this);
    _this.onChange = _this.onChange.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Segment.Inline, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Document Verification Page :'), _react2.default.createElement(_semanticUiReact.Image, { src: 'https://cdn.dribbble.com/users/760295/screenshots/3866906/scaning.gif', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Segment.Inline, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('ol', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Documents : '), '    ', _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.props.ipfs.map(function (name) {
        return _react2.default.createElement('li', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, ' ', _react2.default.createElement('a', { href: 'https://ipfs.io/ipfs/' + name, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, ' Click here'), ' ');
      }), ' ')), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'ID :'), '  ', _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.props.ids.map(function (name, index) {
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, name);
      })))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), '   ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), '    ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement('form', { onSubmit: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.onChange, placeholder: 'Enter the id of document', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { animated: true, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Verify'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'check', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))))))));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx2ZXJpZnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsIkltYWdlIiwiU2VnbWVudCIsIkRpdmlkZXIiLCJlc3RvcmUiLCJ3ZWIzIiwiVGVzdCIsInF1ZXJ5IiwiaXBmcyIsImlkcyIsInByb3BzIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhY2NvdW50IiwibWV0aG9kcyIsInZlcmlmeURvYyIsInN0YXRlIiwic2VuZCIsImZyb20iLCJkb2N4IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJiaW5kIiwibWFwIiwibmFtZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDN0MsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs4QkFJNEIsQTtZQUFTLEEsa0JBQUEsQTtZLEFBQU0saUJBQUEsQTs7Ozs7aURBRXRDLEVBQUUsTUFBRixNQUFTLEssQUFBVDs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7OztnQkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSUFBQSxBQUNaOztVQURZLEFBZ0JwQix1QkFoQm9COzJGQWdCVCxrQkFBQSxBQUFNLE9BQU47d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ1Q7c0JBQUEsQUFBSyxTQUFTLEVBQUMsSUFBRyxNQUFBLEFBQU0sT0FEZixBQUNULEFBQWMsQUFBaUI7O21CQUR0QjttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBQWhCUzs7NEJBQUE7aUNBQUE7QUFB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LEFBRXZDO0FBRnVDO0FBQUEsMEJBRXZDLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNBO0FBREE7a0RBQ08sTUFBUCxBQUFhLFFBQVEsVUFBWSxLQUFqQyxBQUFzQyxVQUFVLGFBQWhELEFBQTREO29CQUE1RDtzQkFEQSxBQUNBLEFBQ0E7QUFEQTs7O29CQUNBO3NCQUZBLEFBRUE7QUFBQTtBQUFBLFVBQVU7O29CQUFBO3NCQUZWLEFBRVUsQUFDbkI7QUFEbUI7QUFBQSwwQkFDbkIsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSwyQkFBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBekNKLEFBQ0EsQUFFRCxBQVdDLEFBQ0EsQUFvQlMsQUFHVCxBQUVFLEFBQ0UsQUFZRDtBQVpDOzs7Ozs7QUF0RlcsQSxBQXNHZjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ2ZXJpZnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=